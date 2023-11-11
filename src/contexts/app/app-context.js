import { createContext, useState, useEffect } from "react";

import app from "../../services/firebase/firebase-service";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const AppContext = createContext({
  currentUser: null,
  getUserData: async () => {},
  addUserData: async () => {},
});

const auth = getAuth(app);
const db = getFirestore(app);

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, set the user state
        setCurrentUser(user);
        // console.log(user.email);
        // console.log(user.uid);
      } else {
        // User is signed out, set the user state to null
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, [currentUser]);

  // Function to add data (income, expenses, savings)
  const addUserData = async (uid, screenType, data) => {
    try {
      const docRef = await addDoc(
        collection(db, "users", uid, screenType),
        data
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Function to get data (income, expenses, savings)
  const getUserData = async (uid, screenType) => {
    try {
      const q = query(collection(db, "users", uid, screenType));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  };

  const value = { currentUser, addUserData, getUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
