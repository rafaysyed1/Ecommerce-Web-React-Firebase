import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,  onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAOiNkDGgucey026gc3WbU4NACF3rNNfNY",
    authDomain: "clothing-brand-db-be15a.firebaseapp.com",
    projectId: "clothing-brand-db-be15a",
    storageBucket: "clothing-brand-db-be15a.appspot.com",
    messagingSenderId: "519416838871",
    appId: "1:519416838871:web:d41c85c215f0c145c10e92"
};
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
export const signInwithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const auth = getAuth();
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInfo = { displayName: "Rafay" }) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    // User Document 
    console.log(userSnapShot);
    //Show Existence of User Document 
    const existUser = userSnapShot.exists();
    console.log(existUser);

    if (!existUser) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })

        } catch (error) {
            console.log("Error in creating user document", error.message);
        }
    }
    return userDocRef
}
export const AuthCreateUserwithEmailandPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}
export const AuthSiginwithEmailandPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);