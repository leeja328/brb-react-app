import './Start.css';
import { Link } from 'react-router-dom';
import App from './App';
import About from './About';

function Start() {
    return (
        <form className="start">
            <h1 id='title'>AcroNames</h1>
            <Link to="/App" element={<App />} id='start'><button id='button_start'>- Start -</button></Link>
            <Link to="/About" element={<About />} className='howto'><h3>how to / about</h3></Link>
        </form>
    );
}

export default Start;