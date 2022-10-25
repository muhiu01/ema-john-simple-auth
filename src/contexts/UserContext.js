import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user from state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    } ,[])

    const authInfo = { user, createUser, signInUser, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;