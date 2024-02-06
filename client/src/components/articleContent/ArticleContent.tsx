import Spinner from "../spinner/Spinner";
import ArticleCard from "../articleCard/ArticleCard";
import Comments from "../../containers/comments/Comments";
import { IArticleContentProps } from "../../types/articleTypes";

const ArticleContent = ({
    loadingStatus,
    article,
    addToBasket,
}: IArticleContentProps) => {
    return (
        <Spinner loadingStatus={loadingStatus}>
            <ArticleCard article={article} addToBasket={addToBasket} />
            <Comments article={article} />
        </Spinner>
    );
};

export default ArticleContent;
