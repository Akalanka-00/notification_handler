// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFf1onQAB6yKO5NEIfBHJ9XPO0BOtpmso",
  authDomain: "remotecoders-2140a.firebaseapp.com",
  projectId: "remotecoders-2140a",
  storageBucket: "remotecoders-2140a.appspot.com",
  messagingSenderId: "894126657098",
  appId: "1:894126657098:web:77ab7cf91e409fc64d20b3",
  measurementId: "G-XWFYE5BRX7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export{ db }