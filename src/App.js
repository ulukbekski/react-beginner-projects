import './index.scss';
import 'aos/dist/aos.css';
import React from 'react';
import Aos from 'aos';

function Details({title, children}) {
  const [open, setOpen] = React.useState(false)
  return(
   <button onMouseOver={()=>setOpen(true)} onMouseOut={()=> setOpen(false)}>
    {title}
    {open&&<div className='children'>{children}</div>}
   </button>
  )
}
  function App() {
    
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>0</h1>
      </div>
    
      <Details className="button" title="Plus">
          <h1 className='children'>1234</h1>
        </Details>

        <Details className="button" title="qwerty">
          <h2 className='children'>qwerty</h2>
        </Details>
    </div>
  );
}

export default App;
