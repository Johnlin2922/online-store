import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../../utilities/firebase/FirebaseUtilities";
import Button from "../../button/ButtonComponent";
import SignUpForm from "../../sign-up-form/SignUpFormComponent";
import SignInForm from "../../sign-in-form/SignInFormComponent";

const Authentication = () => {
    const logGooglePopUpUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response; //split destructuring into 2 lines, more explicit

        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm/>
            <SignUpForm />
        </div>
    );
};
export default Authentication;
