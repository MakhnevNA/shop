import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import PageTitle from "../../components/pageTitle/PageTitle";
import BasketContent from "../../containers/basketContent/BasketContent";
import { useHttp } from "../../hooks/https.hook";
import { observer } from "mobx-react-lite";

const BasketPage = observer(() => {
    const { loadingStatus } = useHttp();

    return (
        <PageLayout>
            <Header />
            <Content loadingStatus={loadingStatus}>
                <PageTitle name="Корзина" />
                <BasketContent loadingStatus={loadingStatus} />
            </Content>
        </PageLayout>
    );
});

export default BasketPage;
