import { makeAutoObservable } from "mobx";
import { IItem } from "../types/catalogTypes";

export interface IHomePage {
    items: IItem[];
    categories: string[] | [];
    params: {
        page: number;
        limit: number;
        category: string;
        sort: string;
        search: string;
    };
}

// export interface ValidParams {
//     page?: number;
//     limit?: number;
//     sort?: string | null;
//     query?: string | null;
//     category?: string | null;
// }

class Catalog {
    homePage: IHomePage = {
        items: [],
        categories: [],
        params: {
            page: 1,
            limit: 6,
            category: "",
            sort: "order",
            search: "",
        },
    };
    pagesArr: (string | number)[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    updatePagesArr = (newArr: (string | number)[]) => {
        this.pagesArr = newArr;
    };

    // обновляем стейте с товарами
    getItems = (data: IItem[]) => {
        this.homePage = {
            ...this.homePage,
            items: data,
        };
    };

    // Инициализация параметров
    // Восстановление из адреса
    // initParams = (newParams = {}) => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const validParams: ValidParams = {};
    //     if (urlParams.has("page"))
    //         validParams.page = Number(urlParams.get("page")) || 1;
    //     if (urlParams.has("limit"))
    //         validParams.limit = Math.min(Number(urlParams.get("limit")) || 6);
    //     if (urlParams.has("sort")) validParams.sort = urlParams.get("sort");
    //     if (urlParams.has("query")) validParams.query = urlParams.get("query");
    //     if (urlParams.has("category"))
    //         validParams.category = urlParams.get("category");

    //     this.setParams(
    //         { ...this.homePage.params, ...validParams, ...newParams },
    //         true
    //     );
    // };

    // setParams = (newParams = {}, replaceHistory = false) => {
    //     const params = { ...this.homePage.params, ...newParams };

    //     // Установка новых параметров
    //     this.homePage = {
    //         ...this.homePage,
    //         params,
    //     };

    //     // Сохранить параметры в адрес страницы
    //     const urlSearch = new URLSearchParams(params).toString();
    //     const url =
    //         window.location.pathname + "?" + urlSearch + window.location.hash;
    //     if (replaceHistory) {
    //         window.history.replaceState({}, "", url);
    //     } else {
    //         window.history.pushState({}, "", url);
    //     }

    //     const apiParams = {
    //         limit: params.limit,
    //         sort: params.sort,
    //     };

    //     if (params.category.length) {
    //         apiParams["search[category]"] = params.category;
    //     }

    //     const response = fetch(`/?${new URLSearchParams(apiParams)}`).then(
    //         (json) => json.json()
    //     );

    //     this.homePage = {
    //         ...this.homePage,
    //         items: response,
    //         params: {
    //             ...this.homePage.params,
    //         },
    //     };
    // };

    // метод по смене состояния page
    changePage = (newPAge: number) => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                page: newPAge,
            },
        };
    };

    // метод по смене состояния limit
    changeLimit = (newLimit: number) => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                limit: newLimit,
            },
        };
    };

    // метод по смене состояния category
    changeCategory = (newCategory: string) => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                category: newCategory,
            },
        };
    };

    // метод по смене состояния sort
    changeSort = (newSort: string) => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                sort: newSort,
            },
        };
    };

    // метод по смене состояния search
    changeSearch = (newSearch: string) => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                search: newSearch,
            },
        };
    };

    // метод по установке доступных категорий
    initCategories = (categories: string[] | []) => {
        this.homePage = {
            ...this.homePage,
            categories: categories,
        };
    };

    // сброс параметров к начальным
    resetParams = () => {
        this.homePage = {
            ...this.homePage,
            params: {
                ...this.homePage.params,
                category: "",
                sort: "order",
                search: "",
            },
        };
    };
}

export default new Catalog();
