import { Categories_Action_Types } from "./categoryTypes";

export const Categories_Initial_State = {
    categoriesMap: {}
}

export const categoriesReducer = (state = Categories_Initial_State, action) => {
    const {type, payload} = action; 
    
    switch (type){
        case Categories_Action_Types.Set_Categories_Map:
            return{
                ...state,
                categoriesMap: payload 
            };
        default: 
            return state;
    }
}