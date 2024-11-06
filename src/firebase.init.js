// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DONOT Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyDI7RNNvGdKgHrzZdfMSSspb1FVJi5InJ4",
  authDomain: "email-password-auth-9d998.firebaseapp.com",
  projectId: "email-password-auth-9d998",
  storageBucket: "email-password-auth-9d998.firebasestorage.app",
  messagingSenderId: "979822515418",
  appId: "1:979822515418:web:39487502f27745f15ac1e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);