import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import ArticleContent from "../../components/articleContent/ArticleContent";
import articleCardStore from "../../store/articleCardStore";
import { useHttp } from "../../hooks/https.hook";
import basketStore from "../../store/basketStore";

function ArticlePage() {
    const params = useParams();
    const { request, loadingStatus } = useHttp();
    const { article, setArticleCard } = articleCardStore;
    const { addToBasket } = basketStore;

    useEffect(() => {
        request({ url: `http://localhost:3000/article/${params.id}` }).then(
            (data) => setArticleCard(data)
        );
    }, [params.id]);

    return (
        <PageLayout>
            <Header />
            <Content loadingStatus={loadingStatus}>
                <ArticleContent
                    loadingStatus={loadingStatus}
                    article={article}
                    addToBasket={addToBasket}
                />
            </Content>
        </PageLayout>
    );
}

export default ArticlePage;
