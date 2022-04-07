import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing.js';
import Home from './components/home/home.js';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* <ResponsiveAppBar></ResponsiveAppBar> */}
            {/* <Landing></Landing> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dash" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
