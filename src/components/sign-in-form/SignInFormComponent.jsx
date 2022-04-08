import {createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utilities/firebase/FirebaseUtilities";
import { useState } from "react";
import FormInput from "../form-input/FormInputComponent";
import "./SignInForm.styles.scss";
import Button from "../button/ButtonComponent";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            console.log("Response: ", response);
        } catch (error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, Email already in use");
            }
            console.log("User Creation encountered an error: ", error);
        }

    }

    const SignInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response; //split destructuring into 2 lines, more explicit

        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleForgotPassword = () => {
        //ToDo, Johnny Come Back and Support this feature :), Johnny from April 7,2022
        alert("Forgot Password feature not supported yet");
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    return (
        <div className="sign-up-container">
            <h2>Already Have an Account?</h2>
            <span>Sign In with your email and password</span>
            <form
                onSubmit={handleSubmit}
            >
                <FormInput
                    required={true}
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    label = "Email"
                />
                <FormInput
                    required={true}
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    label = "Password"
                />
                {/* <Button onClick={handleForgotPassword} buttonType="inverted">Forgot Password</Button> */}

                <div className="buttons-container">
                    <Button onClick={handleForgotPassword} buttonType="inverted">Forgot Password</Button>
                    <Button type="submit" buttonType="inverted">Sign In</Button>
                    <Button onClick={SignInWithGoogle} buttonType="google">
                        Sign in with Google
                    </Button>
                </div>

            </form>
        </div>
    );
};
export default SignInForm;
