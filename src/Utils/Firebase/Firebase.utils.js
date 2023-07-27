import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
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




export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const auth = getAuth();
export const db = getFirestore();

export const addCollectionandDocument = async (collectionKey, objectsToAdd) => {
    const userCollectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    //forEach Array to iterate the array for each object
    objectsToAdd.forEach((object) => {
        //Creating a document of objects array by taking userCollection as ref to which collection data would be added and second taking the object to added
        const docRef = doc(userCollectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    });
    await batch.commit();
    alert("Categories are succesfully added to Firestore Collection")
}

export const categorygetCollectionAndDoc = async () => {
    const collectionRef = collection(db, "productCategories")

    //Using query function and passing collection to tell on which collection to do query
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)
   return querySnapShot.docs.map(docSnapShot=>docSnapShot.data());
    // const CategoryMap = querySnapShot.docs.
    return CategoryMap;
}
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
export const AuthCreateUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}
export const AuthSiginWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);


export const getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth)=>{
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
})}
