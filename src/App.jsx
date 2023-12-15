import React, { useState } from 'react';

const App = () => {
  const [BgColor, setBackgroundColor] = useState(''); 

  const ColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className='container mt-5'>
      <div style={{ backgroundColor: BgColor, padding: '20px',height:'100vh' }}>
        
        <h1 className='mt-2' style={{textAlign:'center'}}>Background Color Changer</h1>
      </div>

      <div className='container mt-2' style={{textAlign:'center'}}>
        <button className='me-3 ms-3 rounded-2 border-1' onClick={() => ColorChange('red')}>Red</button>
        <button className='me-3 rounded-2 border-1' onClick={() => ColorChange('green')}>Green</button>
        <button className='me-3 rounded-2 border-1' onClick={() => ColorChange('blue')}>Blue</button>
        <button className='me-3 rounded-2 border-1' onClick={() => ColorChange('yellow')}>Yellow</button>
      
      </div>
    </div>
  );
};

export default App;