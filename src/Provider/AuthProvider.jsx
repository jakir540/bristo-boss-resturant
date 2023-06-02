import {createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext =createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const googleProvider =new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

//sign in with google 

const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}




    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
         
            if (currentUser) {
                axios.post('http://localhost:5000/jwt',{email: currentUser.email})
            .then(data =>{
                localStorage.setItem("access-token",data.data.token)
                setLoading(false)
            })
            }
            else{
                localStorage.removeItem("access-token")
            }
          
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const updateUser =(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;