import Button from "../button/ButtonComponent";
import "./CartDropdown.styles.scss"

const CartDropdown = () => {
    return (<div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Checkout</Button>
    </div>);
}
export default CartDropdown;