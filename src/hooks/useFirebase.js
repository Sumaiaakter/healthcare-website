import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    // registration with email and password------
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // set email ------------------------------
    const handleEmailChange = (e) => {
        setEmail(e.target.value)

    }

    // set password ----------------------------
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // toggle---------------------------------
    const toggle = e => {
        setIsLogin(e.target.checked)
    }
    // registration --------------------------
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password);
        const newUser = createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
        if (password.length < 6) {
            setError('"password must be at least 6 characters"')
            return;
        }
        if (isLogin) {

            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    setError('')
                })

                .catch(error => {
                    setError(error.message)
                })

        }
        else {
            newUser();
            // createUserWithEmailAndPassword(auth, email, password)
            //     .then(result => {
            //         const user = result.user;
            //         console.log(user)
            //         setError('')
            //         verifyEmail();
            //         setUserName();
            //     })
            //     .catch(error => {
            //         setError(error.message)
            //     })
        }


    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }



    // sign in with google --------------------
    const googleSignIn = () => {
        setIsLoading(true);
        // const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))


    }
    // for state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }



    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }


    return {
        user, name,
        handleNameChange,
        isLoading,
        logOut,
        googleSignIn,
        handleEmailChange, handlePasswordChange, handleResetPassword, handleRegister, error, toggle, isLogin,
    }

}

export default useFirebase;