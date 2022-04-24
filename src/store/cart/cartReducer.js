import { Cart_Action_Types } from "./cartActionTypes";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const Cart_Initial_State = {
    isCartOpen: false,
    cartItems: [],
};

export const reducer = (state = Cart_Initial_State, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case Cart_Action_Types.Set_Cart_Items:
            return { ...state, cartItems: payload };
        case Cart_Action_Types.Set_Is_Cart_Open:
            return { ...state, isCartOpen: payload };
        default:
            return state;
    }
};

const persistConfig = {
    key: "cart", 
    storage: storage, 
    blacklist: ['isCartOpen']
}

export const cartReducer = persistReducer(persistConfig, reducer);
