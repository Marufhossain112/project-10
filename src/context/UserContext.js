import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const popupSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User auth changed", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { user, popupSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default UserContext;
