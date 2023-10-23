import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_jSZYUtWHgiK9rHXqhy6Ty43SZ_qA77U",
    authDomain: "fireshipapp-9de59.firebaseapp.com",
    projectId: "fireshipapp-9de59",
    storageBucket: "fireshipapp-9de59.appspot.com",
    messagingSenderId: "1010502985003",
    appId: "1:1010502985003:web:657d4611ba715a5e37916e",
  };

// Initalize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
