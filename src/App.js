import './App.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { RxTimer } from 'react-icons/rx';

function App() {

  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('');
  const lst_of_acros = ['lol', 'yolo', 'smh', 'lmk', 'rofl', 'brb', 'omg', 'Game Over - Press Enter'];
  const lst_of_answers = ['laugh out loud'];
  const [points, setPoints] = useState(0);

  const [seconds, setSeconds] = useState(60);
  
  const acroRef = useRef();
  const [prompt, setPrompt] = useState(lst_of_acros[count]);
  const navigate = useNavigate();
  
  //this is the function to add the inputted answers 
  function onSubmit(e) {
    e.preventDefault()
    setPrompt(lst_of_acros[count + 1])
    if (count < lst_of_acros.length - 1) {
      setCount(count + 1)
      } else {
        navigate('/Results',{state:{txt, points}});
      }

    setTxt(txt + (`${lst_of_acros[count]} - ${acroRef.current.value}\n`))
    
    if (acroRef === lst_of_answers[count]) {
      setPoints(points + 1)
    }

    document.getElementById('user_guess').value = null;
    console.log(count)
    console.log(txt)
    console.log(points)
    
  }

  //this is the hook for the timer
  useEffect(() => {
    if (seconds === 0) {
      navigate('/Results',{state:{txt}});
    }
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, navigate]);
  
  
  
  function refreshPage() {
    window.parent.location = window.parent.location.href;
  }

  return (
    
    <div className="App">
      {/* <button onClick={() => refreshPage()}>New Game</button> */}
      <div className='header'>
        <Link to="/" element={<App />} id='home'><BiHomeAlt />Home</Link>
        <div id='timerlook'>
          <RxTimer size={24}/>{seconds > 0 ? seconds : 0}
        </div>
      </div>
      <div className='instructions'>
        <h5>Type your best guess for each acronym below before time runs out!</h5>
      </div>
      <form onSubmit={onSubmit}>  
        <h1 id="guess">{prompt}</h1>
        <TextField id="user_guess" label="type here" variant="filled" inputRef={acroRef} />
        <div className='enter_button'>
          <button><h5>Enter</h5></button>
        </div>
      </form>
    </div>
  );
}

export default App;
