// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbsq0e4L5TDyK8V3YmUyi1h5zVNcHd1U",
  authDomain: "fashion-ecommerce-3d535.firebaseapp.com",
  projectId: "fashion-ecommerce-3d535",
  storageBucket: "fashion-ecommerce-3d535.appspot.com",
  messagingSenderId: "757551014279",
  appId: "1:757551014279:web:89267d8e9195ef489ef322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
const  db = getFirestore(app);

export {auth,db}