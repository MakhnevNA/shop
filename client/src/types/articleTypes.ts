import { TLoadingStatusOptions } from "../hooks/https.hook";
import { IItem } from "./catalogTypes";

export interface IArticleCardProps {
    article: IItem | null;
    addToBasket: (_id: number) => void;
}

export interface IArticleContentProps {
    loadingStatus: TLoadingStatusOptions;
    article: IItem | null;
    addToBasket: (_id: number) => void;
}
