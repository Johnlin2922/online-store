import Button from "../button/ButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import "./CartDropdown.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {

    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);

    const toCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map(item => {
                return <CartItem key={item.id} cartItem={item}/>
            })}
        </div>
        <Button onClick={toCheckoutHandler}>Checkout</Button>
    </div>);
}
export default CartDropdown;