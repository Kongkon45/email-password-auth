// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIICfgoIl-GFJ7lhQP0H-rlSSdcXT28sM",
  authDomain: "login-page-d6dca.firebaseapp.com",
  projectId: "login-page-d6dca",
  storageBucket: "login-page-d6dca.appspot.com",
  messagingSenderId: "1054004846249",
  appId: "1:1054004846249:web:41172e837f55cbd52753b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;