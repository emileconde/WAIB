import { createContext, useState, useEffect } from "react";

import app from "../../services/firebase/firebase-service";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

export const AppContext = createContext({
  currentUser: null,

  startRealTimeListener: () => {},
  getUserData: async () => {},
  addUserData: async () => {},
  updateUserData: async () => {},
  deleteUserData: async () => {},
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
      //console.log("Setting user Data: ", data);
      //setUserData(data);
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  };

  // Function to update user data
  const updateUserData = async (uid, screenType, documentId, data) => {
    try {
      const docRef = doc(db, "users", uid, screenType, documentId);
      await updateDoc(docRef, data);
      console.log("Document updated with ID: ", documentId);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // Function to delete user data
  const deleteUserData = async (uid, screenType, documentId) => {
    try {
      const docRef = doc(db, "users", uid, screenType, documentId);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", documentId);
    } catch (e) {
      console.log("Error deleting document: ", e);
    }
  };

  const startRealTimeListener = (uid, screenType, callback) => {
    return onSnapshot(
      collection(db, "users", uid, screenType),
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        callback(newData);
      },
      (error) => {
        console.log("Error fetching real-time data:", error); // Log any errors
      }
    );
  };

  const value = {
    currentUser,
    addUserData,
    getUserData,
    updateUserData,
    deleteUserData,
    startRealTimeListener,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
