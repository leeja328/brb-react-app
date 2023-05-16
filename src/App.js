import './App.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { RxTimer } from 'react-icons/rx';

function App() {

  // const [lst, setLst] = useState([]);
  // useEffect(() => {
  //   while (lst.length < 8) {
  //     const ran_num = Math.floor(Math.random() * 15)
  //     if (lst.includes(ran_num)) {
  //       continue
  //     } else if (ran_num === 0) {
  //       continue
  //     } else {
  //       setLst(lst.push(ran_num))
  //     }
  //   }
  //   console.log(lst)
  // }, []);

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

  function randomizeArray(array) {
    // Create a copy of the array so we don't modify the original.
    const shuffledArray = array.slice(0);
  
    // Loop through the array and swap each element with a random element from the rest of the array.
    for (let i = 0; i < shuffledArray.length; i++) {
      const randomIndex = Math.floor(Math.random() * (shuffledArray.length - i));
      // const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[randomIndex];
      // shuffledArray[randomIndex] = temp;
    }
  
    // Return the shuffled array.
    return shuffledArray;
  }

  const shuffledArray = randomizeArray(lst_of_acros);
  console.log(shuffledArray)

  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('');
  // const lst_of_acros = ['lol', 'yolo', 'smh', 'lmk', 'rofl', 'brb', 'omg', 'Game Over - Press Enter'];
  // const lst_of_answers = ['','maytheforcebewithyou', 'youonlyliveonce', 'shakingmyhead', 'letmeknow', 'rollingonthefloorlaughing', 'berightback', 'ohmygoodness'];
  // const lst_of_answers = ['', 'maytheforcebewithyou', 'hastalavistababy.', 'houstonwehaveaproblem', 'imthekingoftheworld', 'thereisnoplacelikehome', 'nobodyputsbabyinthecorner', 'toinfinityandbeyond', 'berightback', 'laughoutloud', 'givemeabreak', 'breakaleg', 'killtwobirdswithonestone', 'imlovinit', 'dididothat'];
  const [points, setPoints] = useState(0);

  const [seconds, setSeconds] = useState(60);

  const acroRef = useRef();

  // const [prompt, setPrompt] = useState(lst_of_acros[count]);

  const [prompt, setPrompt] = useState(shuffledArray[count].Acronym);
  const [category, setCategory] = useState(shuffledArray[count].Category);
  const [hint, setHint] = useState(shuffledArray[count].Hint);
  const navigate = useNavigate();



  //this is the function to add the inputted answers 
  function onSubmit(e) {
    e.preventDefault()
    // setPrompt(lst_of_acros[count])
    console.log(shuffledArray[count])
    setPrompt(shuffledArray[count + 1].Acronym)
    setCategory(shuffledArray[count + 1].Category)
    setHint(shuffledArray[count + 1].Hint)
    if (count < 12) {
      setCount(count + 1)
    } else {
      navigate('/Results', { state: { txt, points } });
    }

    // setTxt(txt + (`${lst_of_acros[count]} - ${acroRef.current.value}\n`))
    setTxt(txt + (`${shuffledArray[count].Acronym} - ${acroRef.current.value}\n`))

    //this checks whether the inputted answer is correct
    let new_answer1 = acroRef.current.value.toLowerCase();
    const new_answer2 = new_answer1.replace(/\s/g, '');
    console.log(new_answer2)
    // console.log(lst_of_answers.includes('laugh'))
    // const new_answer3 = lst_of_answers.includes(new_answer2)
    if (new_answer2 === shuffledArray[count].Answer) {
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
  }, [seconds, navigate]);

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
        <h5>&#40;{count+1}&#47;{shuffledArray.length-1}&#41;</h5>
        <h1 id="guess">{prompt}</h1>
        <h1 id="category">Category: {category}</h1>
        <h1 id="hint">Hint: {hint}</h1>
        <TextField id="user_guess" label="type here" variant="filled" inputRef={acroRef} />
        <div className='enter_button'>
          <button><h5>Enter</h5></button>
        </div>
      </form>
    </div>
  );
}

export default App;
