import { createContext, useState, useEffect } from "react";

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
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === itemToRemove.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
            return cartItem;
        }
    });
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0, 
    removeItemFromCart: () => {}
});

export const CartProvider = (props) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(getNewCartStateAdd(cartItems, productToAdd));
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(getNewCartStateRemove(cartItems, itemToRemove));
    };

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemCount, removeItemFromCart };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
};
