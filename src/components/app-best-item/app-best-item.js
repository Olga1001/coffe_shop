import { Link } from "react-router-dom";
import './app-best-item.scss'

const AppBestItem = (props) => {
    const {name, image, price, link} = props;
    // Шлях до зображення
    const srcImage = `${process.env.PUBLIC_URL}/assets/images/products/${image}`;


    return (
        <li className="item_best">
            <Link to={link}
            >
                <img src={srcImage} alt={name} />
                <span className="item_name">{name}</span>
                <span className="item_price">{price}$</span>
            </Link>
        </li>
    )
}

export default AppBestItem;