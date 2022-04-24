import {createAction} from "../../utilities/reducer/reducerUtils";
import { Categories_Action_Types } from "./categoryActionTypes";

const setCategories = (categoriesArray) => {
    return createAction(Categories_Action_Types.Set_Categories, categoriesArray);
} 

export {setCategories}