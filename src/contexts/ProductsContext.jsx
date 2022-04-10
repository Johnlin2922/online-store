import { createContext, useState } from "react";
import ProductData from "../shop-data.json";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState(ProductData);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}> {props.children} </ProductsContext.Provider>
    );
};
