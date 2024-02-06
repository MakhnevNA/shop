import { useEffect, useMemo } from "react";
import { Button, Input, Select } from "antd";
import { IHomePage } from "../../store/catalog";
import { IItem } from "../../types/catalogTypes";

import "./catalogFilter.scss";

interface ICatalogFilterProps {
    changeSearchFilter: (newSearch: string) => void;
    homePageSearch: string;
    getItems: (res: IItem[]) => void;
    request: <T>(data: { url: string }) => Promise<T>;
    homePage: IHomePage;
    initCategories: (categories: string[] | []) => void;
    resetParams: () => void;
}

// Компонент со всеми фильтрами каталога
function CatalogFilter({
    changeSearchFilter,
    homePageSearch,
    getItems,
    request,
    homePage,
    initCategories,
    resetParams,
}: ICatalogFilterProps) {
    const options = {
        sort: useMemo(
            () => [
                { value: "order", title: "По порядку", _id: 1 },
                { value: "price", title: "Сначала дешевые", _id: 2 },
                { value: "-price", title: "Сначала дорогие", _id: 3 },
                { value: "edition", title: "Древние", _id: 4 },
                { value: "-edition", title: "Новые", _id: 5 },
            ],
            []
        ),
        categories: useMemo(() => {
            const categories = homePage.categories.map((item, i) => {
                return { title: item, value: item };
            });
            return [{ title: "Все", value: "Все" }, ...categories];
        }, [homePage.categories]),
    };

    useEffect(() => {
        setTimeout(() => {
            request<IItem[]>({
                url: `http://localhost:3000/?page=${homePage.params.page}&limit=${homePage.params.limit}&search=${homePage.params.search}`,
            }).then((data) => getItems(data));
        }, 1000);
    }, [homePage.params.search]);

    // получаем все категории товаров
    useEffect(() => {
        request<string[]>({ url: "http://localhost:3000/category" }).then(
            (categories) => initCategories(categories)
        );
    }, [homePage.categories]);

    return (
        <div className="CatalogFilter">
            <Select
                className="CatalogFilter__option"
                defaultValue={options.categories[0]}
                options={options.categories}
                // onChange={callbacks.onSort}
            ></Select>
            <Select
                className="CatalogFilter__option"
                defaultValue={"По порядку"}
                // onChange={callbacks.onSort}
            >
                {options.sort.map((item, i) => {
                    return (
                        <Select.Option value={item.value} key={i}>
                            {item.title}
                        </Select.Option>
                    );
                })}
            </Select>
            <Input
                className="CatalogFilter__option"
                value={homePageSearch}
                onChange={(e) => changeSearchFilter(e.currentTarget.value)}
                placeholder={"Поиск"}
            />
            <Button onClick={() => resetParams()}>Сбросить</Button>
        </div>
    );
}

export default CatalogFilter;
