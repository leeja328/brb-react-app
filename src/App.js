import './App.css';
import { useRef } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { useState } from 'react';


function App() {
  const lst_of_acros = ['lol', 'rofl', 'brb', 'omg']
  const acroRef = useRef();
  const [prompt, usePrompt] = useState(lst_of_acros[0]);

  let num = 0

  

  function onSubmit2(e) {
    e.preventDefault()
    console.log(txt)
    document.getElementById('results').innerHTML = txt
  }


  function onSubmit(e) {
    e.preventDefault()
    document.getElementById('guess').innerHTML = lst_of_acros[num + 1]
    if (num < lst_of_acros.length) {
      num += 1} else {
        console.log('game over')
      }

    txt += (`${lst_of_acros[num - 1]} = ${acroRef.current.value}\n`)

    document.getElementById('user_guess').value = null;
    
  }

  let txt = " "

  

  // function onSubmit3(e) {
  //   e.preventDefault()
    
  //   document.getElementById('guess').innerHTML = lst_of_acros[num + 1]
  // }

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
        
        <input id='user_guess' ref={acroRef}></input>
        <button >Submit</button>
      </form>
      <form onSubmit={onSubmit2} className='top'>
        <button>Results</button>
        <h5 className='a' id="results"></h5>
      </form>
      
      
    </div>
  );
}

export default App;
