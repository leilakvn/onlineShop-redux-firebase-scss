import  { useState, useEffect } from "react";
import { auth } from "../firebasse.config";
import { onAuthStateChanged } from "firebase/auth";
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  console.log(currentUser)
  return {currentUser};
};
