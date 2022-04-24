import { Cart_Action_Types } from "./cartActionTypes";
import {createAction} from "../../utilities/reducer/reducerUtils";

export const setIsCartOpen = (boolean) => createAction(Cart_Action_Types.Set_Is_Cart_Open, boolean);

export const setCartTotal = (cartTotal) => createAction(Cart_Action_Types.Set_Cart_Total, cartTotal);


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = getNewCartStateAdd(cartItems, productToAdd);
    return createAction(Cart_Action_Types.Set_Cart_Items, newCartItems)
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = getNewCartStateRemove(cartItems, itemToRemove);
    return createAction(Cart_Action_Types.Set_Cart_Items, newCartItems)
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = getNewCartStateClear(cartItems, itemToRemove);
    return createAction(Cart_Action_Types.Set_Cart_Items, newCartItems)
};


const getNewCartStateAdd = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const getNewCartStateRemove = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === itemToRemove.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
            return cartItem;
        }
    });
};

const getNewCartStateClear = (cartItems, itemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};