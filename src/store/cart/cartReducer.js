import { Cart_Action_Types } from "./cartActionTypes";

export const Cart_Initial_State = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = Cart_Initial_State, action = {}) => {
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
