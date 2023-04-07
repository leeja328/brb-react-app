import { Route, Routes } from 'react-router-dom';
import Start from './Start';
import App from './App';
import About from './About';
import Results from './Results'

function Home () {
    return (
        <>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/App" element={<App />} />
            <Route path="/About" element={<About />} />
            <Route path="/Results" element={<Results />} />
        </Routes></>
    );
}

export default Home; 