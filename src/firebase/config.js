import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFeYIDHUgU8gB7KMfVn0_fsxQTjVpjtKY",
  authDomain: "fir-9-reading-list-58272.firebaseapp.com",
  projectId: "fir-9-reading-list-58272",
  storageBucket: "fir-9-reading-list-58272.appspot.com",
  messagingSenderId: "995965569439",
  appId: "1:995965569439:web:259164e3017d2ff14095aa",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
