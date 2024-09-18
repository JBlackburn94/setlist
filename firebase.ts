import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQQsCzb7pV4IUJqfJ_TUXrA85Ch5f3ze4",
  authDomain: "bs-setlist.firebaseapp.com",
  projectId: "bs-setlist",
  storageBucket: "bs-setlist.appspot.com",
  messagingSenderId: "459192821643",
  appId: "1:459192821643:web:a9ee85b719c050accff18e",
  measurementId: "G-W1LYH7DC0C",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
