import Spinner from "../../components/spinner/Spinner";
import BasketTotal from "../../components/basketTotal/BasketTotal";
import BasketList from "../../components/basketList/BasketList";
import EmptyBasket from "../../components/emptyBasket/EmptyBasket";
import basketStore from "../../store/basketStore";
import { IBasketContentProps } from "../../types/basketTypes";

function BasketContent({ loadingStatus }: IBasketContentProps) {
    const { basket, removeFromBasket } = basketStore;

    return (
        <Spinner loadingStatus={loadingStatus}>
            {basket.list.length > 0 ? (
                <>
                    <BasketList
                        basketList={basket.list}
                        removeFromBasket={removeFromBasket}
                    />
                    <BasketTotal basket={basket} />
                </>
            ) : (
                <EmptyBasket />
            )}
        </Spinner>
    );
}

export default BasketContent;
