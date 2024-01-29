// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoLd9lEHJHTRZnufX-mHawgMMJQSZjB_s",
  authDomain: "netflixgpt-413cd.firebaseapp.com",
  projectId: "netflixgpt-413cd",
  storageBucket: "netflixgpt-413cd.appspot.com",
  messagingSenderId: "529651148053",
  appId: "1:529651148053:web:502f7da79da1e358ecf51c",
  measurementId: "G-LYLXDG243C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();