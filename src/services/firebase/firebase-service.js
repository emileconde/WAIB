import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXl8gdTyLPKrNE2gt8rvB1chc1U__Rlg0",
  authDomain: "waib-895b4.firebaseapp.com",
  projectId: "waib-895b4",
  storageBucket: "waib-895b4.appspot.com",
  messagingSenderId: "134466105509",
  appId: "1:134466105509:web:5de6f10b42f69d28235d4c",
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
