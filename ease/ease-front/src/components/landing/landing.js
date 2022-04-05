import ResponsiveAppBar from '../navbar.js';
import './landing.css';

const Landing = () => {
    return (
        <div className="home">
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className="title">
                <div>ease.</div>
                <p>sports made easy.</p>
                <button className="login-btn">GO &#8594;</button>
            </div>
        </div>
    );
};

export default Landing;
