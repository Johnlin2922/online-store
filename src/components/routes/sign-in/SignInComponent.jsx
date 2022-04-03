import {signInWithGooglePopup} from "../../../utilities/firebase/FirebaseUtilities"

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log("Sign in Component Response: ", response);
    }

    return(<div>
        <h1>
            Sign In
        </h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>); 
}
export default SignIn;