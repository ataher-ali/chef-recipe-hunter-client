import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null)


  //Sign In With Google
  const signInWithGoogle = () => {
    console.log("google");
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUser(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  //Sign In With Github
  const signInWithGithub = () => {
    console.log("github");
    signInWithPopup(auth, GithubProvider)
      
};

  //create user with email and password
  const createUserWithPass = () => {
    
    console.log('password , email');

  };

  //logOut
  const logOut =()=>{
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      console.log('logout');
  }

       // observe auth state change
       useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth state change', currentUser);
            setUser(currentUser);
          
        });

        return () =>{
            unsubscribe();
        }

    }, [])

  //AuthInfo
  const AuthInfo = {
    user,
    createUserWithPass,
    signInWithGoogle,
    signInWithGithub,
    logOut
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
