import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utilities/firebase/FirebaseUtilities";
import { useState } from "react";
import FormInput from "../form-input/FormInputComponent";
import "./SignUpForm.styles.scss";
import Button from "../button/ButtonComponent";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //confirm password matches
        if(password !== confirmPassword){
            alert("Passwords Must Match");
        }

        try{
            const response = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(response.user, {displayName});
            resetFormFields();
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, Email already in use");
            }
            console.log("User Creation encountered an error: ", error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form
                onSubmit={handleSubmit}
            >
                <FormInput
                    required={true}
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    label = "Display Name"
                />
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
                <FormInput
                    required={true}
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    label = "Confirm Password"
                />
                <Button type="submit" buttonType="inverted">Sign Up</Button>

            </form>
        </div>
    );
};
export default SignUpForm;
