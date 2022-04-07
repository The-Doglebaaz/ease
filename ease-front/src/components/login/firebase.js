import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCE6kL0Ur0DlydP4ZsXC4Y7mXsggmHloSQ",
  authDomain: "ease-c3119.firebaseapp.com",
  projectId: "ease-c3119",
  storageBucket: "ease-c3119.appspot.com",
  messagingSenderId: "623631828941",
  appId: "1:623631828941:web:5e4906d72c033982726684",
  measurementId: "G-58LH30HSZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        
    })
}