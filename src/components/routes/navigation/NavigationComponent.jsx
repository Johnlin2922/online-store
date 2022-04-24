import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../assets/logos/crown.svg";
import { signOutUser } from "../../../utilities/firebase/FirebaseUtilities";
import CartIcon from "../../cart-icon/CartIconComponent";
import CartDropdown from "../../cart-dropdown/CartDropdownComponent";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/userSelector";
import { selectIsCartOpen } from "../../../store/cart/cartSelector"

const Navigation = () => {
 
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container">
                    {currentUser && (
                        <span className="nav-link">
                            {" "}
                            Currently Signed In As:{" "}
                            {currentUser.providerData[0].email}
                        </span>
                    )}
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/authentication">
                            Sign In
                        </Link>
                    )}

                    <CartIcon/>

                </div> 
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
