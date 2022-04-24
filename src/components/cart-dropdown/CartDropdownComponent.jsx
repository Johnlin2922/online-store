import Button from "../button/ButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import "./CartDropdown.styles.scss"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";

const CartDropdown = () => {

    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);

    console.log(cartItems);

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