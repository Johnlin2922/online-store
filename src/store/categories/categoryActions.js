import {createAction} from "../../utilities/reducer/reducerUtils";
import { Categories_Action_Types } from "./categoryTypes";

const setCategoriesMap = (categoriesMap) => {
    return createAction(Categories_Action_Types.Set_Categories_Map, categoriesMap);
} 

export {setCategoriesMap}