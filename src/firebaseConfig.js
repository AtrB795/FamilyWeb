import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbjMecFXgKPUaQLZWjG1dlx13Wwn2475Q",
    authDomain: "familyweb-960a4.firebaseapp.com",
    projectId: "familyweb-960a4",
    storageBucket: "familyweb-960a4.appspot.com",
    messagingSenderId: "1020772859350",
    appId: "1:1020772859350:web:a6e185ec520febcf94f877",
    measurementId: "G-9R0F5PYEDN"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };