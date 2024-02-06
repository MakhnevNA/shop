import List from "../list/List";
import ItemBasket from "../itemBasket/ItemBasket";
import { IBasketListProps } from "../../types/basketTypes";

function BasketList({ basketList, removeFromBasket }: IBasketListProps) {
    return (
        <List>
            <ItemBasket
                basketList={basketList}
                removeFromBasket={removeFromBasket}
            />
        </List>
    );
}

export default BasketList;
