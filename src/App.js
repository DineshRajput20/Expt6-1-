import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#f5f5f5');
  
  const changeColor = () => {
    setBgColor(bgColor === '#f5f5f5' ? '#a0e7e5' : '#f5f5f5');
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', transition: 'background-color 0.5s ease' }}>
      <h1 className="animated-heading">Shashwat P8 42403</h1>
      <button className="change-color-btn" onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default App;
