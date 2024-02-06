import { IBasketItem } from "./catalogTypes";
import { TLoadingStatusOptions } from "../hooks/https.hook";

export interface IBasketStore {
    list: IBasketItem[];
    sum: number;
    amount: number;
}

export interface IItemBasketProps {
    basketList: IBasketItem[];
    removeFromBasket: (_id: number) => void;
}

export interface IBasketListProps {
    basketList: IBasketItem[];
    removeFromBasket: (_id: number) => void;
}

export interface IBasketContentProps {
    loadingStatus: TLoadingStatusOptions;
}

export interface IBasketTotalProps {
    basket: IBasketStore;
}
