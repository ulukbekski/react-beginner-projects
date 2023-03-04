import React from 'react';
import './index.scss';
import Overlay from './Overlay';

function App() {

  return (
    <div className="App">
    <Overlay title = "cat" gif = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"><Overlay title="bob" gif = "https://media0.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif"/>  </Overlay>
    </div>
  );
}

export default App;
