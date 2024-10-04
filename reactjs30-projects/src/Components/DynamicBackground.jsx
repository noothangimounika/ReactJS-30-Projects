import React, { useState } from 'react';


function DynamicBackground() {

  const colors = ['#f44336', '#2196F3', '#4CAF50', '#FFC107', '#9C27B0'];
  

  const [colorIndex, setColorIndex] = useState(0);


  const changeBackgroundColor = () => {
   
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      className="background-box"
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={changeBackgroundColor}
    >
      <h1>Click to change background color</h1>
    </div>
  );
}

export default DynamicBackground;
