import { Button } from "antd";
import { plural } from "../../utils/plural";
import { numberFormat } from "../../utils/numberFormat";
import { IBasketTotalProps } from "../../types/basketTypes";
import "./basketTotal.scss";

function BasketTotal({ basket }: IBasketTotalProps) {
    // потом в i18n перенести
    const russianVariants = {
        one: "товар",
        few: "товара",
        many: "товаров",
    };

    return (
        <div className="BasketTotal">
            <div className="BasketTotal__desc">
                <Button type="primary">Оформить заказ</Button>
                <span className="BasketTotal__count">
                    {basket.amount} {plural(basket.amount, russianVariants)}
                </span>
                <span className="BasketTotal__total">
                    {numberFormat(+basket.sum.toFixed(2))} ₽
                </span>
            </div>
        </div>
    );
}

export default BasketTotal;
