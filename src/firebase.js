// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfmur3p8CnNofjf2PZ57Xj_woy-8V44J0",
  authDomain: "naman-17272.firebaseapp.com",
  projectId: "naman-17272",
  storageBucket: "naman-17272.appspot.com",
  messagingSenderId: "899493822506",
  appId: "1:899493822506:web:b5b65092b9d1a8cf9a4353",
  measurementId: "G-EZ7PXGMLC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);