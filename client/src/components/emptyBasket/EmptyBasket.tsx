import { Link } from "react-router-dom";
import "./emptyBasket.scss";
function EmptyBasket() {
    return (
        <div className="EmptyBasket">
            <div className="EmptyBasket__text">Корзина пуста</div>
            <Link to="/" className="EmptyBasket__toCatalog">
                За покупками
            </Link>
        </div>
    );
}

export default EmptyBasket;
