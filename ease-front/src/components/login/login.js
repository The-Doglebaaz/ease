import "./login.css";
import {signInWithGoogle} from "./firebase.js"
import GoogleButton from 'react-google-button'


function Login(){
    return (
    <div className="Login"> 
    
    <GoogleButton className="GoogleButton" onClick={ signInWithGoogle }
/>
    <h1 className="info">{localStorage.getItem("name")}</h1>
    <h1 className="info">{localStorage.getItem("email")}</h1>
    <img className="info" src = {localStorage.getItem("profilePicture")}></img>
     </div>);
}


export default Login;