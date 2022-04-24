import "./CartIcon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/logos/shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cartSelector"
import {setIsCartOpen} from "../../store/cart/cartActions"

const CartIcon = () => {
    
    const dispatch = useDispatch();
    const cartItemCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartItemCount}</span>
        </div>
    );
}

export default CartIcon;