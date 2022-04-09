import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../assets/logos/crown.svg";
import { UserContext } from "../../../contexts/UserContext";

const Navigation = () => {

    const context = useContext(UserContext);
    const currentUser = context.currentUser; //2 lines because its more explicit. Can destructure in future projects. 

    console.log("Navigation Component, CurrentUser: ", currentUser);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>

                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
