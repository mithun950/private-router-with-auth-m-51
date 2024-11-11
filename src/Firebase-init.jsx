import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAioGj8f9FJvjaPSG9psOBz13fYZq3hdf8",
  authDomain: "auth-private-react-route.firebaseapp.com",
  projectId: "auth-private-react-route",
  storageBucket: "auth-private-react-route.firebasestorage.app",
  messagingSenderId: "745873167676",
  appId: "1:745873167676:web:878a950678a1239bf17a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;