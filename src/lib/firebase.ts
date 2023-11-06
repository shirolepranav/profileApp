import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { writable } from 'svelte/store';
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";


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


/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();