import { createContext, useState, useEffect } from "react";

import app from "../../services/firebase/firebase-service";
import {
  collection,
  addDoc,
  getDoc,
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
import Toast from "react-native-toast-message";
import { capitalizeFirstLetter } from "../../util/utils";
import PALETTE from "../../util/palette";

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

  const getUserData = async (uid, screenType) => {
    try {
      const q = query(collection(db, "users", uid, screenType));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data; // Return the aggregated data
    } catch (e) {
      console.error("Error getting documents: ", e);
      return []; // Return an empty array or handle the error as needed
    }
  };

  // Function to update user data. Currently does not have an update functionality but if you'd like to add one
  // All you have to do is use this one. Everything else is taken care of.
  const updateUserData = async (uid, screenType, documentId, data) => {
    try {
      const docRef = doc(db, "users", uid, screenType, documentId);
      await updateDoc(docRef, data);
      console.log("Document updated with ID: ", documentId);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteUserData = async (uid, screenType, documentId) => {
    try {
      const docRef = doc(db, "users", uid, screenType, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const docData = docSnap.data();
        const title = docData.type;
        await deleteDoc(docRef);
        console.log("Document deleted with ID: ", documentId);
        Toast.show({
          type: "success",
          text1: "Success",
          text2: `${capitalizeFirstLetter(title)} was deleted successfully!`,
        });
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.log("Error deleting document: ", e);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong, please try again.",
      });
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
