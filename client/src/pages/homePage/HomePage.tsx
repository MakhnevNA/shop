import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import CatalogList from "../../containers/catalogList/CatalogList";
import { useHttp } from "../../hooks/https.hook";
import catalog from "../../store/catalog";

const HomePage = () => {
    const { homePage, getItems } = catalog;
    const { request, loadingStatus } = useHttp();

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(window.location.search);
    // получаем limit
    const limitQuery = queryParams.get("limit");

    // получаем page
    const pageQuery = queryParams.get("page");

    useEffect(() => {
        // получаем query параметры из url
        const queryParams = new URLSearchParams(window.location.search);

        // получаем page
        const pageQuery = queryParams.get("page");
        // получаем limit
        const limitQuery = queryParams.get("limit");

        // получаем search
        const searchQuery = queryParams.get("search");

        // если параметры не установлены, то устанавливаем их
        if (!pageQuery || !limitQuery) {
            const defaultQueryParams = new URLSearchParams();
            defaultQueryParams.append("page", homePage.params.page.toString());
            defaultQueryParams.append(
                "limit",
                homePage.params.limit.toString()
            );
            defaultQueryParams.append(
                "search",
                homePage.params.search.toString()
            );
            navigate(`/?${defaultQueryParams.toString()}`);
        } else {
            request({
                url: `http://localhost:3000/?page=${pageQuery}&limit=${limitQuery}&search=${searchQuery}`,
            }).then((data) => getItems(data));
        }
    }, [navigate, pageQuery, limitQuery]);

    useEffect(() => {
        setTimeout(() => {
            request({
                url: `http://localhost:3000/?page=${homePage.params.page}&limit=${homePage.params.limit}&search=${homePage.params.search}`,
            }).then((data) => getItems(data));
        }, 1000);
    }, [homePage.params.search]);

    // надо найти где мы в url пушим данные именно из стейте, и еще где мы используемя функцию по смене стейте. надо чтобы при смене page и limit эти даннеы были в url, стейте и страница обновилась и отрисовала новые данные
    // также и с выбором количества товаров на странице, url и элепменты на странице должны бытт связаны
    return (
        <PageLayout>
            <Header />
            <Content loadingStatus={loadingStatus}>
                <CatalogList loadingStatus={loadingStatus} />
            </Content>
        </PageLayout>
    );
};

export default HomePage;
