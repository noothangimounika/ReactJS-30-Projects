// import React from 'react'

// const RandomQuoteGenerator = () => {
//   return (
//     <div>RandomQuoteGenerator</div>
//   )
// }

// export default RandomQuoteGenerator



import React, { useState, useEffect } from 'react';


const RandomQuoteGenerator = () => {
  // List of quotes
  const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The journey of a thousand miles begins with one step. – Lao Tzu"
  ];

  // State to hold the current quote
  const [quote, setQuote] = useState('');

  // Function to generate a random quote
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // Generate a quote when the component renders for the first time
  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{quote}"</p>
        <button className="quote-button" onClick={generateRandomQuote}>
          Generate New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
