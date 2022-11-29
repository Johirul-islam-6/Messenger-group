// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtH7n-CTiRbjdfQssBFUISeJARl6Ff8QI",
    authDomain: "messenger-group-beac3.firebaseapp.com",
    projectId: "messenger-group-beac3",
    storageBucket: "messenger-group-beac3.appspot.com",
    messagingSenderId: "117528618057",
    appId: "1:117528618057:web:c7953246da0cb077158b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;