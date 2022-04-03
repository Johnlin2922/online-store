// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAizbxpJJedrFijXwQLTBzm9AEU7mfBnTE",
    authDomain: "crwn-clothing-db-f38bd.firebaseapp.com",
    projectId: "crwn-clothing-db-f38bd",
    storageBucket: "crwn-clothing-db-f38bd.appspot.com",
    messagingSenderId: "289427145161",
    appId: "1:289427145161:web:fec174da006252aebee818",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
};
