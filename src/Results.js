import React from 'react';
import { useLocation, Link, useState } from 'react-router-dom';
import './Results.css';
import { BiHomeAlt } from 'react-icons/bi';

function Results() {
    const location = useLocation();
    const txt = location.state ? location.state.txt : null;
    const points = location.state ? location.state.points : null;
    console.log(txt);
    console.log(points);

  
    return (
      <>
        <Link to="/" element={<Results />} id="home1">
          <BiHomeAlt />
          Home
        </Link>
        <div className="title">
          <h1>Here are your results:</h1>
        </div>
        <div className='results'>
          {txt ? <h3>{txt}</h3> : <p>No results found.</p>}
        </div>
        <br></br>
        <br></br>
        <div className='points'>
          <h2 id="points_result">Total points: {points}</h2>
        </div>
        <div className='footer'>
        <Link to="/App" element={<Results />}><button id='new1'>New Game!</button></Link> 
        </div>
        
      </>
    );
  }
  

export default Results;