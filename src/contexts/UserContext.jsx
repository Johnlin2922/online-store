import { createContext, useState } from "react";

//Actual storage things
const UserContext = createContext({
    currentUser: null,  
    setCurrentUser: () => null
});

const UserProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};