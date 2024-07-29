import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "Place your API key here",
    authDomain: "Place your authDomain here",
    projectId: "Place your projectId here",
    storageBucket: "Place your storageBucket here",
    messagingSenderId: "Place your messagingSenderId here",
    appId: "Place your appId here",
    measurementId: "Place your measurementId here"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
