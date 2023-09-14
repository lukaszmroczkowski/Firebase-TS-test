// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaD_AASYamSfU_5dxXZWVaRDATxdHZ5kM",
  authDomain: "react-course-71dee.firebaseapp.com",
  projectId: "react-course-71dee",
  storageBucket: "react-course-71dee.appspot.com",
  messagingSenderId: "615075720454",
  appId: "1:615075720454:web:d7dbb1c45ba35d3fa68287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);