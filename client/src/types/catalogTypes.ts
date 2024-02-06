interface IMadeIn {
    _type: string;
}

interface ICategory {
    _type: string;
}

export interface IResponses {
    username: string;
    text: string;
    _id: number;
    data: Date;
    recipient: string;
    parentId: string;
}

export interface IComments {
    username: string;
    text: string;
    responses?: IResponses[] | [];
    _id: number;
    data: Date;
}

export interface IItem {
    _id: number;
    key: string;
    title: string;
    description: string;
    price: number;
    madeIn: IMadeIn;
    edition: number;
    category: ICategory;
    order: number;
    isDeleted: boolean;
    isFavorite: boolean;
    comments: IComments[] | [];
}

export interface IBasketItem extends IItem {
    amount: number;
}

export interface IItemProps {
    items: IItem[];
    addToBasket: (_id: number) => void;
}
