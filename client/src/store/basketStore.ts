import { makeAutoObservable } from "mobx";
import { IBasketStore } from "../types/basketTypes";

class BasketStore {
    basket: IBasketStore = {
        list: [],
        sum: 0,
        amount: 0,
    };

    constructor() {
        makeAutoObservable(this);
    }

    //Добавление товара в корзину
    addToBasket = async (_id: number) => {
        let sum = 0;
        // Ищем товар в корзине, чтобы увеличить его количество
        let exist = false;
        const list = this.basket.list.map((item) => {
            let result = item;
            if (item._id === _id) {
                exist = true; // Запомним, что был найден в корзине
                result = { ...item, amount: item.amount + 1 };
            }
            sum += result.price * result.amount;
            return result;
        });

        if (!exist) {
            // Поиск товара в каталоге, чтобы его добавить в корзину.
            const response = await fetch(
                `http://localhost:3000/article/${_id}`
            );
            const json = await response.json();

            list.push({ ...json, amount: 1 }); // list уже новый, в него можно пушить.
            // Добавляем к сумме.
            sum += json?.price;
        }

        // обновляем стейт
        this.basket.list = list;
        this.basket.sum = sum;
        this.basket.amount = list.length;
    };

    // Удаление товара из корзины
    removeFromBasket = (_id: number) => {
        let sum = 0;

        const list = this.basket.list.filter((item) => {
            if (item._id !== _id) {
                sum += item.price * item.amount;
                return true;
            }
            return false;
        });

        // обновляем стейт
        this.basket.list = list;
        this.basket.sum = sum;
        this.basket.amount = list.length;
    };
}

export default new BasketStore();
