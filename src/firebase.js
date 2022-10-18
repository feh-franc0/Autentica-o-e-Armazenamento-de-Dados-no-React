import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCelU9vqdD6Wr6_Vu9Ok6maPM4R00pJY9s",
  authDomain: "auth2-1bc6c.firebaseapp.com",
  projectId: "auth2-1bc6c",
  storageBucket: "auth2-1bc6c.appspot.com",
  messagingSenderId: "584557798249",
  appId: "1:584557798249:web:9be4a6a49899aa1c3093f8",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
