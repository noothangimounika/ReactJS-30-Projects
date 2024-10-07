// src/ColorPicker.js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#000');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <h2>Select a Color</h2>
      <SketchPicker
        color={color}
        onChangeComplete={handleChangeComplete}
      />
      <div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #ccc',
        }}
      ></div>
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ColorPicker;
