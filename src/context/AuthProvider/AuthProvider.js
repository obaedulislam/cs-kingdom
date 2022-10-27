import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}  from 'firebase/auth'
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('track using useEffect', currentUser);
            if (currentUser === null || (currentUser.emailVerified || currentUser.providerData[0].providerId === "github.com")) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        toast.success("You have logout from site ");
        return signOut(auth);

    } 




    const authInfo = {

        user,
        loading,
        setLoading,
        signIn, 
        createUser, 
        updateUserProfile, 
        verifyEmail, 
        googleProviderLogin, 
        githubProviderLogin, 
        logOut};

    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;