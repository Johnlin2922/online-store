import "./Category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../product-card/ProductCardComponent";
import { selectCategoriesMap } from "../../../store/categories/categorySelector";

const Category = () => {

    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);
    
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [category, categoriesMap]);

    return (
        <div className="category-container">
            {products && products.map((product) => <ProductCard product={product} key={product.id}/>)}
        </div>
    );
}

export default Category;