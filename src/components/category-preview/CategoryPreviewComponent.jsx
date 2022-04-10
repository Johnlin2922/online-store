import "./CategoryPreview.styles.scss";
import ProductCard from "../product-card/ProductCardComponent.jsx";

const CategoryPreview = (props) => {
    const {title, products} = props

    const preivewItems = products.filter((_, index) => index <= 3) //gets the first 4 elements
    return(
        <div className="category-preview-container">
            <h2>
                <span className="title">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </span>
            </h2>
            <div className="preview">
                {
                    preivewItems.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        );
                    })

                }
            </div>
        </div>
    );
}

export default CategoryPreview;