import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile} from 'firebase/auth'
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
            setloading(false)
        })
        return()=> unsubscribe()
    },[])
    const creatuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }
    const updateprofile=(username,userimg)=>{
        setloading(true)
        return updateProfile(auth.currentUser,{
            displayName:username,photoURL:userimg
        })
    }
    const authinfo={
        user,
        loading,
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
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;