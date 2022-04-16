import Home from "./components/routes/home/HomeComponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/NavigationComponent";
import Shop from "./components/routes/shop/ShopComponent";
import Authentication from "./components/routes/authentication/AuthenticationComponent";
import Checkout from "./components/routes/checkout/CheckoutComponent";
import { useEffect } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener
} from "./utilities/firebase/FirebaseUtilities";
import { setCurrentUser } from "./store/user/userActions";
import { useDispatch } from "react-redux";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;

    }, []);


    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>

                <Route index={true} element={<Home />}></Route>
                <Route path="shop/*" element={<Shop/>}></Route>
                <Route path="authentication" element={<Authentication/>}></Route>
                <Route path="checkout" element={<Checkout/>}></Route>
            </Route>
        </Routes>
    );
};

export default App;
