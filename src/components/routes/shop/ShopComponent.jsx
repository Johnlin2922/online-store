import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import CategoriesPreview from "../categories-preview/CategoriesPreviewComponent";
import { Routes, Route } from "react-router-dom";
import Category from "../category/CategoryComponent";

import "./Shop.styles.scss";

const Shop = () => {
    return (
        <Routes>
            <Route index={true} element={<CategoriesPreview />} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    );
};
export default Shop;
