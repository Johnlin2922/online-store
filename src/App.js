import Home from "./components/routes/home/HomeComponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/NavigationComponent";
import Shop from "./components/routes/shop/ShopComponent";
import SignIn from "./components/routes/sign-in/SignInComponent";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>

                <Route index={true} element={<Home />}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/sign-in" element={<SignIn/>}></Route>
            </Route>
        </Routes>
    );
};

export default App;
