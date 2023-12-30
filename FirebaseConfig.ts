import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRIypeFDlrHE5hE-nlLvMl_8jrK9UF6BY",
  authDomain: "deliveryfood-a4ed6.firebaseapp.com",
  projectId: "deliveryfood-a4ed6",
  storageBucket: "deliveryfood-a4ed6.appspot.com",
  messagingSenderId: "148844833101",
  appId: "1:148844833101:web:09fba71d9412c301c62f04"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)