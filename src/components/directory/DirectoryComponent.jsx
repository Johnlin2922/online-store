import "./Directory.styles.scss";
import DirectoryItem from "../directory-item/DirectoryItemComponent";
import HatsBackgroundImage from "../../assets/images/hats.png"
import JacketsBackgroundImage from "../../assets/images/jackets.png";
import MensBackgroundImage from "../../assets/images/mens.png";
import WomensBackgroundImage from "../../assets/images/womens.png";
import SneakersBackgroundImage from "../../assets/images/sneakers.png";

const Directory = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: HatsBackgroundImage,
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: JacketsBackgroundImage,
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: SneakersBackgroundImage,
        },
        {
            id: 4,
            title: "womens",
            imageUrl: WomensBackgroundImage,
        },
        {
            id: 5,
            title: "mens",
            imageUrl: MensBackgroundImage,
        },
    ];

    return (
        <div className="directory-container">
            {categories.map((category) => {
                return (
                    <DirectoryItem key={category.id} category={category}/>
                );
            })}
        </div>
    );
}

export default Directory;