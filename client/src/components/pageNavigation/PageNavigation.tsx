// import { useEffect } from "react";
import { useEffect } from "react";
import "./pageNavigation.scss";

interface IPaginationProps {
    currentPage: number;
    pagesArr: (number | string)[];
    openNewPage: (currentPage: number) => void;
    abc: (currentPage: number) => void;
}

const PageNavigation = ({
    currentPage,
    pagesArr,
    openNewPage,
    abc,
}: IPaginationProps) => {
    useEffect(() => {
        abc(currentPage);
    }, [currentPage]);

    // // Количество страниц
    // const length = Math.ceil(props.count / Math.max(props.limit, 1));

    // // Номера слева и справа относительно активного номера, которые остаются видимыми
    // let left = Math.max(props.page - props.indent, 1);
    // let right = Math.min(left + props.indent * 2, length);
    // // Корректировка когда страница в конце
    // left = Math.max(right - props.indent * 2, 1);

    // // Массив номеров, чтобы удобней рендерить
    // let items = [];
    // // Первая страница всегда нужна
    // if (left > 1) items.push(1);
    // // Пропуск
    // if (left > 2) items.push(null);
    // // Последовательность страниц
    // for (let page = left; page <= right; page++) items.push(page);
    // // Пропуск
    // if (right < length - 1) items.push(null);
    // // Последняя страница
    // if (right < length) items.push(length);

    // const onClickHandler = (number) => (e) => {
    //   if (props.onChange && number) {
    // 	e.preventDefault();
    // 	props.onChange(number);
    //   }
    // }

    return (
        <div className="Pagination">
            <div className="Pagination__list">
                {pagesArr.map((item, i) => {
                    if (item === "*") {
                        return (
                            <div
                                key={item + i}
                                className="Pagination__ellipsis"
                            >
                                <div>...</div>
                            </div>
                        );
                    }
                    return (
                        <button
                            key={item}
                            className={`Pagination__item ${
                                currentPage === item && "active"
                            }`}
                            onClick={(e) =>
                                openNewPage(+e.currentTarget.textContent!)
                            }
                        >
                            <span>{item}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PageNavigation;
