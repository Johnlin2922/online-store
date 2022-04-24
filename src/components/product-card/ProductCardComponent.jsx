import "./ProductCard.styles.scss";
import Button from "../button/ButtonComponent";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cartActions";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";

const ProductCard = ({product}) => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;


    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt="name"/>

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
};
export default ProductCard;



