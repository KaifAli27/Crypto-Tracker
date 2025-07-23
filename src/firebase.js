// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfqHbgmo3Tynb_wzM4jGGnFZzdgRfVwng",
  authDomain: "coinpulse-a2676.firebaseapp.com",
  projectId: "coinpulse-a2676",
  storageBucket: "coinpulse-a2676.firebasestorage.app",
  messagingSenderId: "404450432881",
  appId: "1:404450432881:web:042c061c356a6b4925c8d0",
  measurementId: "G-P9ZRG9TV5W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;





