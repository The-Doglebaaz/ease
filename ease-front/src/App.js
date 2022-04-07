import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing.js';
import Home from './components/home/home.js';
import Login from './components/login/login.js';
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
                    <Route path="/login" element {<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
