// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

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
// By exporting these references we can import them from a different
// file.  If only exporting one object, you can use export default
// If exporting multiple, take out the word default OR use { } notation
export const db = getFirestore(app);
export const auth = getAuth();

