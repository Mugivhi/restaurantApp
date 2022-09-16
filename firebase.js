// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnWw4NUlh9oYKLjt856EE0DYgtUe-5Rbg",
  authDomain: "restaurant-app-6e04f.firebaseapp.com",
  projectId: "restaurant-app-6e04f",
  storageBucket: "restaurant-app-6e04f.appspot.com",
  messagingSenderId: "327977135204",
  appId: "1:327977135204:web:9156ee65e368f3f4388371",
  measurementId: "G-2DKY8XG4QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);