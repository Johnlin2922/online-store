import { Categories_Action_Types } from "./categoryActionTypes";

export const Categories_Initial_State = {
    categories: [],
}

export const categoriesReducer = (state = Categories_Initial_State, action) => {
    const {type, payload} = action; 
    
    switch (type){
        case Categories_Action_Types.Set_Categories:
            return{
                ...state,
                categories: payload 
            };
        default: 
            return state;
    }
}