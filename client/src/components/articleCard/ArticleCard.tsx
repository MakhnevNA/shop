import { Button } from "antd";
import { IArticleCardProps } from "../../types/articleTypes";
import "./articleCard.scss";

function ArticleCard({ article, addToBasket }: IArticleCardProps) {
    return (
        article && (
            <div className="ArticleCard">
                <h2 className="ArticleCard__title">{article?.title}</h2>
                <div className="ArticleCard__description">
                    {article.description}
                </div>
                <div className="ArticleCard__prop">
                    <div className="ArticleCard__label">
                        Страна производитель:
                    </div>
                    <div className="ArticleCard__value">
                        {article.madeIn._type}
                    </div>
                </div>
                <div className="ArticleCard__prop">
                    <div className="ArticleCard__label">Категория:</div>
                    <div className="ArticleCard__value">
                        {article.category._type}
                    </div>
                </div>
                <div className="ArticleCard__prop">
                    <div className="ArticleCard__label">Год выпуска:</div>
                    <div className="ArticleCard__value">{article.edition}</div>
                </div>
                <div className="ArticleCard__prop">
                    <div className="ArticleCard__label">Цена:</div>
                    <div className="ArticleCard__value">{article.price} ₽</div>
                </div>
                <Button type="primary" onClick={() => addToBasket(article._id)}>
                    Добавить в корзину
                </Button>
            </div>
        )
    );
}

export default ArticleCard;
