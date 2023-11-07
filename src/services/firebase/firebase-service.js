// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXl8gdTyLPKrNE2gt8rvB1chc1U__Rlg0",
  authDomain: "waib-895b4.firebaseapp.com",
  projectId: "waib-895b4",
  storageBucket: "waib-895b4.appspot.com",
  messagingSenderId: "134466105509",
  appId: "1:134466105509:web:5de6f10b42f69d28235d4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
