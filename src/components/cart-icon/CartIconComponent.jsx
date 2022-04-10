import "./CartIcon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/logos/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartItemCount}</span>
        </div>
    );
}

export default CartIcon;