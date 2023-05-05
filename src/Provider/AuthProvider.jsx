import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const provider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState([])
    const [loading, setLoading] = useState(true);



  //Sign In With Google
  const signInWithGoogle = () => {
    console.log("google");
 return   signInWithPopup(auth, GoogleProvider)
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
  const WithGithub = () => {
    console.log("github");
  return  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    setUser(user)
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
};
//signIn

const signIn=(email, password)=>{
  setLoading(true);
  console.log(email, password);
  return signInWithEmailAndPassword(auth, email, password);
}


  //logOut
  const logOut =()=>{
    setLoading(true);
    signOut(auth)
    .then(() => {
        setUser()
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
            setLoading(false);
          
        });

        return () =>{
            unsubscribe();
        }

    }, [])

  //AuthInfo
  const AuthInfo = {
    user,
    signInWithGoogle,
    WithGithub,
    signIn,
    logOut,

  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
