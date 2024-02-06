import { makeAutoObservable } from "mobx";
import { IItem } from "../types/catalogTypes";

class ArticleCardStore {
    article: IItem | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setArticleCard = (item: IItem) => {
        this.article = item;
    };
}

export default new ArticleCardStore();
