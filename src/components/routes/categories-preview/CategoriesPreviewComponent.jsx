import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import CategoryPreview from "../../category-preview/CategoryPreviewComponent";

import "./CategoriesPreview.styles.scss";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="category-preview-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </div>
    );
};
export default CategoriesPreview;
