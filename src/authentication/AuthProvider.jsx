import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile} from 'firebase/auth'
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const googleProvider=new GoogleAuthProvider()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
        })
        return()=> unsubscribe()
    },[])
    const creatuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    const updateprofile=(username)=>{
        return updateProfile(auth.currentUser,{
            displayName:username
        })
    }
    const authinfo={
        user,
        creatuser,
        google,
        login,
        logout,
        updateprofile
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;