import { Link } from "react-router-dom";
import { Button } from "antd";
import { IItemBasketProps } from "../../types/basketTypes";
import "./itemBasket.scss";

function ItemBasket({ basketList, removeFromBasket }: IItemBasketProps) {
    return (
        <>
            {basketList.map((item) => {
                return (
                    <li key={item._id} className="ItemBasket__list-item">
                        <div className="ItemBasket__list-title">
                            <Link to={`/article/${item._id}`}>
                                {item.title}
                            </Link>
                        </div>
                        <div className="ItemBasket__list-right">
                            <div className="ItemBasket__list-count">
                                {item.amount} шт.
                            </div>
                            <div className="ItemBasket__list-price">
                                {item.price} ₽
                            </div>
                            <div className="ItemBasket__list-cell">
                                <Button
                                    type="primary"
                                    onClick={() => removeFromBasket(item._id)}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </>
    );
}

export default ItemBasket;
