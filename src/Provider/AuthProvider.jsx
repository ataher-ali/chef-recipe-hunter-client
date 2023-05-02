import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //create user with email and password
    const createUserWithPass =(email, password,name,PhotoURL)=>{
        //user registration
        createUserWithEmailAndPassword(auth, email, password)
        
        //user update
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: PhotoURL
          })
    
    
    }

    //
    const user= {displayName:'atahar'}
    //google
    
    //github

    //AuthInfo
    const AuthInfo = {
        user,
        createUserWithPass,
      };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;