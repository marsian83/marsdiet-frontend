import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { auth} from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  signOut,
} from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const setEmail = (email) => {
    return updateEmail(currentUser, email);
  };

  const setPassword = (password) => {
    return updatePassword(currentUser, password);
  };

  const googleSignin = async () => {
    const provider = new GoogleAuthProvider();
    const results = await signInWithPopup(auth, provider);
    console.log(results)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    googleSignin,
    logout,
    resetPassword,
    setEmail,
    setPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
