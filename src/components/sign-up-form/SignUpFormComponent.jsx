import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("value: ", event.target.value)
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //confirm password matches
        if(password !== confirmPassword){
            alert("Passwords Must Match");
        }

        
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form
                onSubmit={handleSubmit}
            >
                <label>Display Name</label>
                <input
                    required={true}
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                <label>Email</label>
                <input
                    required={true}
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <label>Password</label>
                <input
                    required={true}
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <label>Confirm Password</label>
                <input
                    required={true}
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
};
export default SignUpForm;
