import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../../utilities/firebase/FirebaseUtilities";
import SignUpForm from "../../sign-up-form/SignUpFormComponent";
import SignInForm from "../../sign-in-form/SignInFormComponent";
import "./Authentication.styles.scss";

const Authentication = () => {
    const logGooglePopUpUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response; //split destructuring into 2 lines, more explicit

        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm />
        </div>
    );
};
export default Authentication;
