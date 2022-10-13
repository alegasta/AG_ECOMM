// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZeVoGzhl-OO9cLSrOMd7RShlwXCFJyJ0",
    authDomain: "ag-ecomm.firebaseapp.com",
    projectId: "ag-ecomm",
    storageBucket: "ag-ecomm.appspot.com",
    messagingSenderId: "168856720383",
    appId: "1:168856720383:web:a893e3f988c5231d3bcdca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);