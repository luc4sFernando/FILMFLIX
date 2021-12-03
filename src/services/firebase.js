// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOuJHfUod-Ui55lD6MtTkWhGntGIzgts",
  authDomain: "netflix-clone-4b7a3.firebaseapp.com",
  projectId: "netflix-clone-4b7a3",
  storageBucket: "netflix-clone-4b7a3.appspot.com",
  messagingSenderId: "819233862904",
  appId: "1:819233862904:web:f5ed75ac83d2ba96b0370d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = getAuth(app);

const db = getFirestore();

export { auth, storage };
export default db;
