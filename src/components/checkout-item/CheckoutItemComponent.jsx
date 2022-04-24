import "./CheckoutItem.styles.scss";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { useDispatch } from "react-redux";
import {clearItemFromCart, addItemToCart, removeItemFromCart} from "../../store/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem;

    const handleClearItem = () => {
        dispatch(clearItemFromCart(cartItems, cartItem));
    };

    const handleAddItem = () => {
        dispatch(addItemToCart(cartItems, cartItem));
    };

    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
    };

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={handleRemoveItem}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleAddItem}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={handleClearItem}>
                &#10005;
            </div>
        </div>
    );
};
export default CheckoutItem;
