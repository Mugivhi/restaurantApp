// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import {getAuth} from 'firebase/auth';
// import firebase from 'firebase'
// import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnWw4NUlh9oYKLjt856EE0DYgtUe-5Rbg",
  authDomain: "restaurant-app-6e04f.firebaseapp.com",
  databaseURL: "https://restaurant-app-6e04f-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-6e04f",
  storageBucket: "restaurant-app-6e04f.appspot.com",
  messagingSenderId: "327977135204",
  appId: "1:327977135204:web:9156ee65e368f3f4388371",
  measurementId: "G-2DKY8XG4QT"
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export{firebase}

// Initialize Firebase
// console.log(process.env)
// const app = initializeApp(firebaseConfig);
// export  const auth = getAuth(app);
// export const db = getDatabase(app);
// export {firebase}
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore(app);
// export const restaurantsRef = db.collection('restaurants');
// export {firebase}