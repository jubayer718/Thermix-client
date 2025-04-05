// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdNJmiqztdNLWkxmJuob_9TFjy6LQP8QE",
  authDomain: "thermix-c4a65.firebaseapp.com",
  projectId: "thermix-c4a65",
  storageBucket: "thermix-c4a65.firebasestorage.app",
  messagingSenderId: "1070431488120",
  appId: "1:1070431488120:web:ee9d45c60eecf36c21458d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)