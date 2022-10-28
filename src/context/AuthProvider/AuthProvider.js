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

    // Firebase Google Provider Authentication Function
    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Firebase GitHub Provider Authentication Function
    const githubProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Firebase Create User With Email & Password Auth Function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Firebase SignIn With Email & Password Auth Function
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Firebase Update User on State Auth Function
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // Firebase Email Verification Auth Function
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Firebase useEffect To Change state Auth Function
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

    // Firebase User Logout Auth Function
    const logOut = () => {
        setLoading(true);
        toast.success("You have logout from site ");
        return signOut(auth);

    } 

    // Firebase Pass All Auth to the Childreen using this Variable
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