import { createContext, useEffect, useReducer } from "react";
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

const Initial_State = {
    currentUser: null
}

const UserProvider = (props) => {


    useEffect(() => {
        // const unsubscribe = onAuthStateChangedListener(
        //     auth,
        //     handleAuthStateChange
        // ); //this function calls another function inside my utils which bubbles up a unsubscribe function. I need to call this on unmount to prevent memory leaks
        // return unsubscribe; //return value from useEffect is called on unmount. This is how we do it in functional components.

        const unsubscribe = onAuthStateChangedListener((user) => {
            //console.log(user.providerData);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;

    }, []);

    const [state, dispatch] = useReducer(userReducer, Initial_State);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SetCurrentUser, payload: user});
    } 
    const value = { currentUser, setCurrentUser };
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};


const USER_ACTION_TYPES = {
    "SetCurrentUser": "SetCurrentUser"
}

const userReducer = (state, action) => {
    const {type, payload} = action; 
    
    switch (type){
        case USER_ACTION_TYPES.SetCurrentUser:
            return{
                ...state,
                currentUser: payload 
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`);

    }
}


export { UserContext, UserProvider, USER_ACTION_TYPES };
