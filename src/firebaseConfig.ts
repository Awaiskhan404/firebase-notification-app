import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBERyi8yvlJHHnTC6Vu6IQUzsT03tpi2WI",
    authDomain: "fir-notification-app-35966.firebaseapp.com",
    projectId: "fir-notification-app-35966",
    storageBucket: "fir-notification-app-35966.appspot.com",
    messagingSenderId: "716484190134",
    appId: "1:716484190134:web:d73fd769c8ca6f90716b17",
    measurementId: "G-0HK8P4B98N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
