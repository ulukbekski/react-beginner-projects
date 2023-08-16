import './index.scss';
import React from 'react'

function App() {
  const [password, setPassword]  = React.useState('')
  const [passLen , setPassLen] = React.useState(10)
  const [passElements, setPassElements] = React.useState({
    upperCase:true,
    lowerCase: true,
    numbers: true,
    symbols: true
  })
  const {upperCase, lowerCase, numbers, symbols} = passElements
  const generatePass = () => {
    const alphabet = 'KXZMNAQJHTRPYLDIVWBCFEGSUO';
    const symbol = '!@#$%^&*()_+{}[]|\\;:\'",.<>?`~-='
    let result = "";
    for(let i=0;i< passLen ;i++){
      const ran = []
      if(upperCase){ ran.push( alphabet[Math. floor(Math. random() * alphabet.length)])}
      if(lowerCase){ ran.push( alphabet[Math. floor(Math. random() * alphabet.length)].toLowerCase())}
      if(numbers){   ran.push( Math.floor(Math. random() * 10))}
      if(symbols){   ran.push( symbol[Math. floor(Math. random() * symbol.length)])}
      result += ran[ Math.floor(Math.random() * ran.length)]
    }
    setPassword(result)
  }


  return (
    <div className="App">
      <span className="subtitle">Пароль:</span>
      <h2>{password}</h2>
      <div className="row">
        <span>Длина паролья:</span>
        <input 
          className="pwg-length" 
          type="number" 
          value={passLen} 
          onChange={(event) => setPassLen(event.target.value)}
         />
      </div>
      <div className="row">
        <span>Прописные буквы:</span>
        <input 
        checked={passElements.upperCase}
        onChange={() => setPassElements(prevState => ({ ...prevState, upperCase: !prevState.upperCase }))}
        className="styled-checkbox" id="checkbox1" type="checkbox" value="value1" />
        <label htmlFor="checkbox1" />
      </div>
      <div className="row">
        <span>Строчные буквы:</span>
        <input
        onChange={() => setPassElements(prevState => ({ ...prevState, lowerCase: !prevState.lowerCase }))} 
        checked={passElements.lowerCase}
        className="styled-checkbox" id="checkbox2" type="checkbox" value="value1" />
        <label htmlFor="checkbox2" />
      </div>
      <div className="row">
        <span>Цифры:</span>
        <input 
        checked={passElements.numbers}
        onChange={() => setPassElements(prevState => ({ ...prevState, numbers: !prevState.numbers }))} 
         className="styled-checkbox" id="checkbox3" type="checkbox" value="value1" />
        <label htmlFor="checkbox3" />
      </div>
      <div className="row">
        <span>Символы:</span>
        <input 
        checked={passElements.symbols}
        onChange={() => setPassElements(prevState => ({ ...prevState, symbols: !prevState.symbols }))} 
          className="styled-checkbox" id="checkbox4" type="checkbox" value="value1" />
        <label htmlFor="checkbox4" />
      </div>
      <button onClick={generatePass}>Сгенерировать</button>
    </div>
  );
}

export default App;
