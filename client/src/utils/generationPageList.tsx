export function generationPageList(activePage: number = 1, maxPage: number) {
    const allPagesArr = [];

    // в массив пушим номер пред, текущую страницу и след страниц
    if (activePage) {
        allPagesArr.push(activePage);
        allPagesArr.push(activePage + 1);
        allPagesArr.unshift(activePage - 1);
    }

    // если активная страница это не 1, 2 или 3, тогда в начало за 1 элемент до текущей страницы  вставляем звездчоку
    if (activePage !== 1 && activePage !== 2 && activePage !== 3) {
        allPagesArr.unshift("*");
    }

    // если последняя странца совпадает с активной, то последний элемент удаляем
    if (activePage === maxPage) {
        allPagesArr.pop();
    }

    // для 1, и последних трех страниц не пушим  * в конец
    if (
        activePage !== 1 &&
        activePage + 2 !== maxPage &&
        activePage + 1 !== maxPage &&
        activePage !== maxPage
    ) {
        allPagesArr.push("*");
    }

    // если номер страницы больше 2, то чтобы вначале подгружалась 1
    if (activePage > 2) {
        allPagesArr.unshift(1);
    }

    // если номер страницы равен 1, то чтобы  не было 0 вначале, и нумерация захватывала 3, еще и звездочку в конец
    if (activePage === 1) {
        allPagesArr.shift();
        allPagesArr.push(activePage + 2);
        allPagesArr.push("*");
    }

    // если последняя страница не равна текущей + 1, и последняя страница не равна текущей то в конце пушим последнюю страницу
    if (maxPage !== activePage + 1 && activePage !== maxPage) {
        allPagesArr.push(maxPage);
    }

    return { allPagesArr };
}
