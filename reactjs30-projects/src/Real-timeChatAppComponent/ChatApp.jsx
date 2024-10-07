import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatApp.css';  

const socket = io('http://localhost:4000');

function ChatApp() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setChat((prevChat) => [...prevChat, message]);
    });

    return () => socket.off('receiveMessage');
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', message);
    setMessage('');  // Clear input after sending
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {chat.map((msg, index) => (
          <div key={index} className="chat-message">{msg}</div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
