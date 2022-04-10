import { createContext, useState, useEffect } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
    signOutUser,
} from "../utilities/firebase/FirebaseUtilities";

//Actual storage things
const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        // const unsubscribe = onAuthStateChangedListener(
        //     auth,
        //     handleAuthStateChange
        // ); //this function calls another function inside my utils which bubbles up a unsubscribe function. I need to call this on unmount to prevent memory leaks
        // return unsubscribe; //return value from useEffect is called on unmount. This is how we do it in functional components.

        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user.providerData);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;

    }, []);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
