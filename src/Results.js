import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Results.css';

import { BiHomeAlt } from 'react-icons/bi';

function Results() {
    const location = useLocation();

    return (
        <>
        <Link to="/" element={<Results />} id='home1'><BiHomeAlt />Home</Link>
        <div className='a' id='results'>
            <h1>Here are your results:</h1>
            <br></br>
            <h3>{location.state.Txt}</h3>
        </div>
        </>
    )
}

export default Results;