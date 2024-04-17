import './App.css';
import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { RxTimer } from 'react-icons/rx';
import { useMemo } from 'react';
import { radioClasses } from '@mui/material';
import RandOrder from './RandOrder';

function App() {

  

  const lst_of_acros = [
    {
      'Acronym': 'MTFBWY',
      'Category': 'Film',
      'Hint': 'Ben',
      'Answer': 'maytheforcebewithyou'
    },
    {
      'Acronym': 'HLVB',
      'Category': 'Film',
      'Hint': 'Al',
      'Answer': 'hastalavistababy'
    },
    {
      'Acronym': 'HWHAP',
      'Category': 'Film',
      'Hint': 'Apollo 13',
      'Answer': 'houstonwehaveaproblem'
    },
    {
      'Acronym': 'ITKOTW',
      'Category': 'Film',
      'Hint': 'Iceberg',
      'Answer': "imthekingoftheworld"
    },
    {
      'Acronym': 'TNPLH',
      'Category': 'Film',
      'Hint': 'Wizard',
      'Answer': "theresnoplacelikehome"
    },
    {
      'Acronym': 'NPBITC',
      'Category': 'Film',
      'Hint': 'Dirty Dancing',
      'Answer': 'nobodyputsbabyinthecorner'
    },
    {
      'Acronym': 'TIAB',
      'Category': 'Film',
      'Hint': 'Buzz',
      'Answer': 'toinfinityandbeyond'
    },
    {
      'Acronym': 'BRB',
      'Category': 'Idiom',
      'Hint': 'Eazy',
      'Answer': 'berightback'
    },
    {
      'Acronym': 'LOL',
      'Category': 'Idiom',
      'Hint': 'Easy',
      'Answer': 'laughoutloud'
    },
    {
      'Acronym': 'GMAB',
      'Category': 'Idiom',
      'Hint': 'Come on, now',
      'Answer': 'givemeabreak'
    },
    {
      'Acronym': 'BAL',
      'Category': 'Idiom',
      'Hint': 'Good Luck',
      'Answer': 'breakaleg'
    },
    {
      'Acronym': 'KTBWOS',
      'Category': 'Idiom',
      'Hint': 'Two for one',
      'Answer': 'killtwobirdswithonestone'
    },
    {
      'Acronym': 'ILI',
      'Category': 'Mottos',
      'Hint': 'Big Mac',
      'Answer': 'imlovinit'
    },
    {
      'Acronym': 'DIDT',
      'Category': 'TV',
      'Hint': 'Family Matters',
      'Answer': 'dididothat'
    }
  ]
 
  const [newLst, setNewLst] = useState([]);
  const [lst, setLst] = useState(newLst);

  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('');
  
  const [points, setPoints] = useState(0);

  const [seconds, setSeconds] = useState(60);

  const acroRef = useRef();

  const [prompt, setPrompt] = useState(lst_of_acros[count].Acronym);
  const [category, setCategory] = useState(lst_of_acros[count].Category);
  const [hint, setHint] = useState(lst);
  const navigate = useNavigate();

  console.log(newLst);

  //this is the function to add the inputted answers 
  function onSubmit(e) {
    e.preventDefault()
    // setPrompt(lst_of_acros[count]
  
    setPrompt(lst_of_acros[newLst[count + 1]].Acronym)
    setCategory(lst_of_acros[newLst[count + 1]].Category)
    setHint(lst[count + 1])
    
    if (count < 8) {
      setCount(count + 1)
      // console.log(lst[4])
    } else {
      navigate('/Results', { state: { txt, points } });
    }

    // setTxt(txt + (`${lst_of_acros[count]} - ${acroRef.current.value}\n`))
    setTxt(txt + (`${lst_of_acros[count].Acronym} - ${acroRef.current.value}\n`))

    //this checks whether the inputted answer is correct
    let new_answer1 = acroRef.current.value.toLowerCase();
    const new_answer2 = new_answer1.replace(/\s/g, '');
    console.log(new_answer2)
    // console.log(lst_of_answers.includes('laugh'))
    // const new_answer3 = lst_of_answers.includes(new_answer2)
    if (new_answer2 === lst_of_acros[count].Answer) {
      // if (new_answer3 === true) {
      setPoints(points + 1)
    }

    document.getElementById('user_guess').value = null;
    console.log(count)
    console.log(txt)
    console.log(points + "points")

  }

  //this is the hook for the timer
  useEffect(() => {
    if (seconds === 0) {
      navigate('/Results', { state: { txt } });
    }
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // function refreshPage() {
  //   window.parent.location = window.parent.location.href;
  // }

  return (

    <div className="App">
      {/* <button onClick={() => refreshPage()}>New Game</button> */}
      <div className='header'>
        <Link to="/" element={<App />} id='home'><BiHomeAlt />Home</Link>
        <div id='timerlook'>
          <RxTimer size={24} />{seconds > 0 ? seconds : 0}
        </div>
      </div>
      <div className='instructions'>
        <h5>Type your best guess for each acronym below before time runs out!</h5>

      </div>
      <form onSubmit={onSubmit}>
        <h5>&#40;{count+1}&#47;{lst_of_acros.length-1}&#41;</h5>
        <h1 id="guess">{prompt}</h1>
        <h1 id="category">Category: {category}</h1>
        <h1 id="hint">Hint: {hint}</h1>
        <TextField id="user_guess" label="type here" variant="filled" inputRef={acroRef} />
        <div className='enter_button'>
          <button><h5>Enter</h5></button>
        </div>
        <div>
          <RandOrder setNewLst={setNewLst}/>
        </div>
      </form>
    </div>
  );
}

export default App;
