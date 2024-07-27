import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig2 = {
  apiKey: "AIzaSyBo4-_Dz47mS0ok9uS4HCre0X-0kg4bVZM",
  authDomain: "blog-app-f4781.firebaseapp.com",
  projectId: "blog-app-f4781blog-app-f4781.firebaseapp.com",
  storageBucket: "blog-app-f4781.appspot.com",
  messagingSenderId: "796923825071",
  appId: "1:796923825071:web:8a8c74c1b2fadf52693d5a",
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
