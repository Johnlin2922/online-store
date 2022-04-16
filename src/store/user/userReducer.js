import {USER_ACTION_TYPES} from "./userActionTypes";

const Initial_State = {
    currentUser: null
}

const userReducer = (state = Initial_State, action) => {
    const {type, payload} = action; 
    
    switch (type){
        case USER_ACTION_TYPES.SetCurrentUser:
            return{
                ...state,
                currentUser: payload 
            };
        default: 
            return state;

    }
}

export default userReducer;