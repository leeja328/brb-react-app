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
            <h3>
                AcroNames is an exciting game of guessing the meaning of acronyms. Each acronym is given a category and hint to help the player decifer the unkown acronym.<br></br><br></br> i.e. mtfbwy - category - movie - hint - starwars <br></br> answer - may the force be with you
            </h3>
            <br></br>
            <h3>
                The creation of this game came from a reunion at a friend's wedding where I got to catch up with my good friend Brad. He told me about this idea he has always wanted to try and I found it for a great opportunity to use my coding skills to make it happen. 
            </h3>
        </div>
        </div>
            </>
    )
}

export default About;