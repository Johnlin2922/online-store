import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../../utilities/firebase/FirebaseUtilities"

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const {user} = response; //split destructuring into 2 lines, more explicit
        console.log("Sign in Component Response: ", response);
        console.log("Sign in Component Response as JSOnN: ", JSON.stringify(response));
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(<div>
        <h1>
            Sign In
        </h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>); 
}
export default SignIn;