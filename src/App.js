import './index.scss';
import React from 'react';


function App() {
    return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>0</h1>
      </div>
    <div className='flex'>
      <button className="button">increment +</button>
      <button className='button'>reset 0</button>
      <button className="button">decrement -</button>
    </div>
      
    </div>
  );
}

export default App;
