import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from "../../../utilities/firebase/FirebaseUtilities";

const SignIn = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    })

    const logGooglePopUpUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response; //split destructuring into 2 lines, more explicit
       
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const logGoogleRedirectUser = async () => {
        const user = await signInWithGoogleRedirect();
        console.log(user);
        
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGooglePopUpUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
        </div>
    );
};
export default SignIn;
