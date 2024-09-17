
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBqExXgrEbadF-b7Em96QcY5x8EU5W47dA",
  authDomain: "mandateonev2.firebaseapp.com",
  databaseURL: "https://mandateonev2-default-rtdb.firebaseio.com",
  projectId: "mandateonev2",
  storageBucket: "mandateonev2.appspot.com",
  messagingSenderId: "1060369363743",
  appId: "1:1060369363743:web:384fe62c7174965fbcb62a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
