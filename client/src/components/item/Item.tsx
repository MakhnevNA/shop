import { Link } from "react-router-dom";
import { Button } from "antd";
import { numberFormat } from "../../utils/numberFormat";
import { IItem, IItemProps } from "../../types/catalogTypes";
import "./item.scss";

function Item({ items, addToBasket }: IItemProps) {
    return (
        <>
            {items &&
                items.map((item: IItem) => {
                    return (
                        <li className="Main__list-item" key={item._id}>
                            <div className="Main__list-title">
                                <Link to={`/article/${item._id}`}>
                                    {item.title}
                                </Link>
                            </div>
                            <div className="Main__list-actions">
                                <div className="Main__list-price">
                                    {numberFormat(+item.price.toFixed(2))} ₽
                                </div>
                                <Button
                                    type="primary"
                                    onClick={() => addToBasket(item._id)}
                                >
                                    Добавить
                                </Button>
                            </div>
                        </li>
                    );
                })}
        </>
    );
}

export default Item;
