import { Link } from "react-router-dom";
import "./DirectoryItem.styles.scss";

const CategoryItem = (props) => {
    const title = props.category.title; 
    const imageUrl = props.category.imageUrl;

    return (
        <div className="directory-item-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="body">
                <Link to={"/shop/" + title}>
                    <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                    <p>Shop Now</p>
                </Link>
            </div>
        </div>
    );
};

export default CategoryItem;
