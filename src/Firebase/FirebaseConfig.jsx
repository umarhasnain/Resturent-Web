import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

import { getFirestore, collection, addDoc , getDocs ,doc,
  setDoc,onSnapshot ,query
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNus8oLDO0KQvy8lyShDMKOZs4JQUjDxA",
  authDomain: "foodi-resturent-project.firebaseapp.com",
  projectId: "foodi-resturent-project",
  storageBucket: "foodi-resturent-project.appspot.com",
  messagingSenderId: "152364732501",
  appId: "1:152364732501:web:d77fb9958f4254d08644dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  provider,
  getFirestore,
  db,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  signOut,onSnapshot ,query
};
