import './Start.css';
import { Link } from 'react-router-dom';
import App from './App';
import About from './About';

function Start() {
    return (
        <div className="start">
            <h1 id='title'>AcroNames</h1>
            <Link to="/App" element={<App />} id='start'><h1>- Start -</h1></Link>
            <Link to="/About" element={<About />} className='howto'><h3>how to / about</h3></Link>
        </div>
    );
}

export default Start;