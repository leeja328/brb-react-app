import './App.css';
import { useRef } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';




function App() {
  const lst_of_acros = ['lol', 'rofl', 'brb', 'omg',]
  const acroRef = useRef();
  // let [count, useCount] = useState(0);
  const [prompt, usePrompt] = useState(lst_of_acros[0]);
  
  const navigate = useNavigate();

  // let num = 0
  let count = 0

  function onSubmit2(e) {
    e.preventDefault()
    console.log(Txt)
    document.getElementById('results').innerHTML = Txt
  }
  
  

  function onSubmit(e) {
    e.preventDefault()
    document.getElementById('guess').innerHTML = lst_of_acros[count + 1]
    if (count < lst_of_acros.length - 1) {
      count += 1} 
      else {
        document.getElementById('guess').innerHTML = 'Game Over';
        console.log('game over');
        navigate('/Results',{state:{Txt}});
        window.location = '/Results';
      }

    Txt += (`${lst_of_acros[count - 1]} - ${acroRef.current.value}\n`)

    document.getElementById('user_guess').value = null;
    console.log(count)
    
  }

  

  let Txt = " "
  
  
  function refreshPage() {
    window.parent.location = window.parent.location.href;
  }

  return (
    <div className="App">
      {/* <button onClick={() => refreshPage()}>New Game</button> */}
      
      <Link to="/" element={<App />} id='home'><BiHomeAlt />Home</Link>
      <form onSubmit={onSubmit}>
        
      <h1 id="guess">{prompt}</h1>
      {/* <button onSubmit={onSubmit3}>Start</button> */}
        
        {/* <input id='user_guess' ref={acroRef}></input>
        <button >Enter</button> */}
        <TextField id="user_guess" label="type here" variant="filled" inputRef={acroRef} />
        <div className='enter_button'>
          <button><h5>Enter</h5></button>
          </div>
      </form>
      <form onSubmit={onSubmit2} className='top'>
        <button id="results_button">Results<BsArrowRightCircleFill /></button>
        <h5 className='a' id="results"></h5>
      </form>
      
      
    </div>
  );
}

export default App;
