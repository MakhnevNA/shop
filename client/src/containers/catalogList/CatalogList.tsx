import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import PageTitle from "../../components/pageTitle/PageTitle";
import CatalogFilter from "../../components/catalogFilter/CatalogFilter";
import List from "../../components/list/List";
import Item from "../../components/item/Item";
import PaginationFilter from "../paginationFilter/PaginationFilter";
import catalog from "../../store/catalog";
import basketStore from "../../store/basketStore";
import { generationPageList } from "../../utils/generationPageList";
import { TLoadingStatusOptions, useHttp } from "../../hooks/https.hook";
import { useEffect } from "react";

interface ICatalogListProps {
    loadingStatus: TLoadingStatusOptions;
}

function CatalogList({ loadingStatus }: ICatalogListProps) {
    const {
        homePage,
        getItems,
        changePage,
        changeLimit,
        changeSearch,
        initCategories,
        resetParams,
        updatePagesArr,
        pagesArr,
    } = catalog;
    const { allPagesArr } = generationPageList(
        homePage.params.page,
        Math.round(53 / homePage.params.limit)
    );
    const { addToBasket } = basketStore;
    const { request } = useHttp();

    const navigate = useNavigate();

    useEffect(() => {
        updatePagesArr(allPagesArr);
    }, [homePage.params.page]);

    const openNewPage = (currentPage: number) => {
        changePage(currentPage);
        generationPageList(currentPage, 9);

        navigate(
            `/?page=${currentPage}&limit=${homePage.params.limit}&search=${homePage.params.search}`
        );
    };

    const changeLimitItems = (newLimit: number) => {
        changeLimit(newLimit);
        generationPageList(5, 9);
        navigate(
            `/?page=${homePage.params.page}&limit=${newLimit}&search=${homePage.params.search}`
        );
    };

    const abc = (currentPage: number) => {
        openNewPage(currentPage);
        changeLimitItems(homePage.params.limit);
    };

    const changeSearchFilter = (newSearch: string) => {
        changeSearch(newSearch);
        navigate(
            `/?page=${homePage.params.page}&limit=${homePage.params.limit}&search=${newSearch}`
        );
        console.log(homePage.params.search);
    };

    const queryParams = new URLSearchParams(window.location.search);

    //  получаем page
    // const pageQuery = queryParams.get("page");
    // получаем limit
    const limitQuery = queryParams.get("limit");

    return (
        <Spinner loadingStatus={loadingStatus}>
            <PageTitle name="Каталог товаров" />
            <CatalogFilter
                changeSearchFilter={changeSearchFilter}
                homePageSearch={homePage.params.search}
                getItems={getItems}
                request={request}
                homePage={homePage}
                initCategories={initCategories}
                resetParams={resetParams}
            />
            <List>
                <Item items={homePage.items} addToBasket={addToBasket} />
            </List>
            <PaginationFilter
                currentPage={homePage.params.page}
                pagesArr={pagesArr}
                openNewPage={openNewPage}
                value={+limitQuery!}
                changeLimitItems={changeLimitItems}
                abc={abc}
            />
        </Spinner>
    );
}

export default CatalogList;
