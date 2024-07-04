// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8MEiT0LLNnjogmd0v-Nnow3yjj9UWigo",
  authDomain: "ai-travel-e9ddc.firebaseapp.com",
  projectId: "ai-travel-e9ddc",
  storageBucket: "ai-travel-e9ddc.appspot.com",
  messagingSenderId: "42384127592",
  appId: "1:42384127592:web:d4205bce936d58311baddd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
