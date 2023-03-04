import React from "react";

function Overlay({gif,title,children}){
    const[open,setOpen] = React.useState(false)
    let clouse =!open? "открыть окно":"закрыть окно";
    return (
        
           <div>
             <button onClick={()=>setOpen((pref)=>{console.log(pref);return !pref})} className="open-modal-btn">✨ {clouse}</button>
            {open &&  <div className="overlay">
                   <div className="modal">
                     <svg height="200" viewBox="0 0 200 200" width="200" onClick={()=>setOpen(false)}>
                       <title />
                       <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                     </svg>
                     <img src={gif} alt="asdf"/>
                     <h1>{title}</h1>
                     {children}
                     <div/>
                     </div>
                     </div>}
                     
           </div>
                     
    )
}

export default Overlay;

