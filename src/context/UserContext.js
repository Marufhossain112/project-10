import React, { createContext, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = { user, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default UserContext;
