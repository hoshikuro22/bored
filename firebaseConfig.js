
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIjQ_BsF833NOTHYIWBrg8eVTY24kDWr0",
  authDomain: "fir-79407.firebaseapp.com",
  projectId: "fir-79407",
  storageBucket: "fir-79407.appspot.com",
  messagingSenderId: "269645881500",
  appId: "1:269645881500:web:18d551a1b4af0189710d59",
  measurementId: "G-28T9LD6P36"
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();


