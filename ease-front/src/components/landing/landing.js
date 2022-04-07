import ResponsiveAppBar from '../navbar.js';
import './landing.css';

const Landing = () => {
    return (
        <div className="home">
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className="title">
                <div>ease.</div>
                <p>sports made easy.</p>
                <form method="get" action="/dash">
                    <button className="login-btn" type="submit">
                        GO &#8594;
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Landing;
