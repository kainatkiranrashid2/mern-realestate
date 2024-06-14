// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-5b8c5.firebaseapp.com",
  projectId: "mern-realestate-5b8c5",
  storageBucket: "mern-realestate-5b8c5.appspot.com",
  messagingSenderId: "808792594076",
  appId: "1:808792594076:web:4fce8bae1a8bddedebff59",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
