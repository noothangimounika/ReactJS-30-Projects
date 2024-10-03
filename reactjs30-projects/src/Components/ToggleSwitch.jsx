
import React, { useState } from 'react';

function ToggleSwitch() {

  const [isOn, setIsOn] = useState(false);


  const handleToggle = () => {
    setIsOn(!isOn); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toggle Switch</h1>
   
      <button 
        onClick={handleToggle} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleSwitch;