import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBZxcyT7yM7EV2QK72iZrzFO8QLf8MQq7k",
  authDomain: "furniture-ecommerce-93fd8.firebaseapp.com",
  projectId: "furniture-ecommerce-93fd8",
  storageBucket: "furniture-ecommerce-93fd8.appspot.com",
  messagingSenderId: "1089715056419",
  appId: "1:1089715056419:web:f54f2add83eeef6b182696",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app; //ino khodemun ezafe mikonim
