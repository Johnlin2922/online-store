import {createAction} from "../../utilities/reducer/reducerUtils";
import {USER_ACTION_TYPES} from "./userActionTypes";

const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SetCurrentUser, user);
} 

export {setCurrentUser}