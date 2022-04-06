import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../../utilities/firebase/FirebaseUtilities";
import SignUpForm from "../../sign-up-form/SignUpFormComponent";


const SignIn = () => {


    const logGooglePopUpUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response; //split destructuring into 2 lines, more explicit
       
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGooglePopUpUser}>Sign in with Google Popup</button>

            <SignUpForm/>
        </div>

    );
};
export default SignIn;
