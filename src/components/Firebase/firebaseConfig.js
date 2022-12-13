import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore, doc} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBRDRwlP7fQEKh9CWSiQNiMT9mvZrnAUJE",
    authDomain: "marvel-quizz-41e39.firebaseapp.com",
    projectId: "marvel-quizz-41e39",
    storageBucket: "marvel-quizz-41e39.appspot.com",
    messagingSenderId: "565448966045",
    appId: "1:565448966045:web:228aae3d81a2e184b23974"
  };




const app = initializeApp(config);
export const auth = getAuth(app);

export const firestore = getFirestore();

export const user = uid => doc(firestore, `users/${uid}`);




