// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import Constants from 'expo-constants'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhasApwps8oddS1uwBOYLnSIiFgL1A0G0",
  authDomain: "rnfirebaseexampleapp-78953.firebaseapp.com",
  projectId: "rnfirebaseexampleapp-78953",
  storageBucket: "rnfirebaseexampleapp-78953.appspot.com",
  messagingSenderId: "771555222347",
  appId: "1:771555222347:web:33700358fdccbe6ec9bece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// note, this line was NOT in the code copied from firebase - but it was in the tutorial
export default app;