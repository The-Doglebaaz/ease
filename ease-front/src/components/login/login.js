import "./login.css";
import {signInWithGoogle} from "./firebase.js"

function Login(){
    return (
    <div className="Login"> Signup/Login page!
    <button onClick={signInWithGoogle}>Sign in with Google!</button>
    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src = {localStorage.getItem("profilePicture")}></img>
     </div>);
}


export default Login;