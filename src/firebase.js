import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW_lL5bpXEickNp1PD1Nyq3-BW6LZQcZ0",
  authDomain: "react-blogs-app.firebaseapp.com",
  projectId: "react-blogs-app",
  storageBucket: "react-blogs-app.appspot.com",
  messagingSenderId: "520626893881",
  appId: "1:520626893881:web:5432b7c30440ec4a0749e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
