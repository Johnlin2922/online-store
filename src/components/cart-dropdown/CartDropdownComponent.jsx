import Button from "../button/ButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import "./CartDropdown.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map(item => {
                return <CartItem key={item.id} cartItem={item}/>
            })}
        </div>
        <Button>Checkout</Button>
    </div>);
}
export default CartDropdown;