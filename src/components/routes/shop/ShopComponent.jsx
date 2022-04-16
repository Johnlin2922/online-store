import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/CategoriesPreviewComponent";
import { Routes, Route } from "react-router-dom";
import Category from "../category/CategoryComponent";
import { getCategoriesAndDocuments } from "../../../utilities/firebase/FirebaseUtilities";
import { setCategoriesMap } from "../../../store/categories/categoryActions";
import { useDispatch } from "react-redux";

import "./Shop.styles.scss";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        };
        getCategoriesMap();
    }, [dispatch]);

    return (
        <Routes>
            <Route index={true} element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};
export default Shop;
