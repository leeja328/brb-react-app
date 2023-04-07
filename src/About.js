import { Link } from 'react-router-dom';
import App from './App';
import { BiHomeAlt } from 'react-icons/bi';
import './About.css';


function About () {
    return (
        <>
        <Link to="/" element={<App />} id='home'><BiHomeAlt />Home</Link>
        <div className="container">
        <div className="howto">
            <h1>How to play</h1>
            <h3>
                AcroNames is an exciting game of guessing the acronym before time runs out! Each acronym is given a category and hint to help the player decifer the unkown acronym.<br></br><br></br> i.e. mtfbwy - category - movie - hint - starwars <br></br> answer - may the force be with you
            </h3>
            <br></br>
            <h1 id="bottom">About</h1>
            <h3 id="bottom">
                This all started when I was catching up with my friend Brad at a wedding. When I told him I was doing programming he told me about a word game he always wanted to make. Thus AcroNames was born!
            </h3>
        </div>
        </div>
            </>
    )
}

export default About;