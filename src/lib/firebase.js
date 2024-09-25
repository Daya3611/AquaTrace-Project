// Import the functions you need from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // For Firestore
import { getDatabase } from "firebase/database";    // For Realtime Database

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS03xjm6SfawuJLOi01dOYcrvV3PNY6OA",
    authDomain: "aquatrace-9d2e8.firebaseapp.com",
    projectId: "aquatrace-9d2e8",
    storageBucket: "aquatrace-9d2e8.appspot.com",
    messagingSenderId: "816277288103",
    appId: "1:816277288103:web:95e1d59f12225dd1881782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (or Realtime Database)
const db = getFirestore(app);  // For Firestore
const database = getDatabase(app);  // For Realtime Database

export { db, database };
