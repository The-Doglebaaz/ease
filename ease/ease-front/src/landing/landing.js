import ResponsiveAppBar from './navbar.js';
import './landing.css';

const Landing = () => {
    return (
        <div className="home">
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className="title">
                <div>ease.</div>
                <p>sports made easy.</p>
            </div>
        </div>
    );
};

export default Landing;
