import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginparocart-22474.firebaseapp.com",
  projectId: "loginparocart-22474",
  storageBucket: "loginparocart-22474.firebasestorage.app",
  messagingSenderId: "545406490884",
  appId: "1:545406490884:web:3b267511ba3e0b1deb1851"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

