import { useSelector } from "react-redux";
import CategoryPreview from "../../category-preview/CategoryPreviewComponent";
import { selectCategoriesMap } from "../../../store/categories/categorySelector";
import "./CategoriesPreview.styles.scss";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

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
