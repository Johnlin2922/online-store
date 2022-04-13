import "./DirectoryItem.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = (props) => {
    const title = props.category.title; 
    const imageUrl = props.category.imageUrl;

    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate("/shop/" + title);
    }

    return (
        <div className="directory-item-container" onClick={onNavigateHandler}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="body">
                <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
