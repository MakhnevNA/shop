import { useState } from "react";
import Comment from "../../components/comment/Comment";
import FormComment from "../../components/formComment/FormComment";
import CommentAction from "../../components/commentsActions/CommentsActions";
import { getTotalComments } from "../../utils/getTotalComments";
import { ICommentsProps } from "../../types/commentsTypes";
import { IComments, IResponses } from "../../types/catalogTypes";

function Comments({ article }: ICommentsProps) {
    const isAuth = true;
    const userName = "admin";

    const [replyComment, setReplyComment] = useState<
        IResponses | IComments | null
    >(null);

    const CommentsAndAuth = () => {
        return (
            <>
                <Comment
                    article={article}
                    replyComment={replyComment}
                    setReplyComment={setReplyComment}
                    isAuth={isAuth}
                    userName={userName}
                />
                <FormComment
                    title="Новый комментарий"
                    canCancel={false}
                    userName={userName}
                />
            </>
        );
    };

    const CommentsWithoutAuth = () => {
        return (
            <>
                <Comment
                    article={article}
                    replyComment={replyComment}
                    setReplyComment={setReplyComment}
                    isAuth={isAuth}
                    userName={userName}
                />
                <CommentAction canCancel={false} />
            </>
        );
    };

    return (
        <div className="Comments">
            <h4 className="Comments__title">
                Комментарии ({article && getTotalComments(article)})
            </h4>
            {article && article.comments.length > 0 && isAuth ? (
                // отображаемый контент, если есть комментарии и пользователь авторизирован
                <CommentsAndAuth />
            ) : article && article.comments.length > 0 && !isAuth ? (
                // отображаемый контент, если есть комментарии и пользователь НЕ авторизирован
                <CommentsWithoutAuth />
            ) : article && article.comments.length === 0 && !isAuth ? (
                // отображаемый контент, если есть нет комментариев и пользователь НЕ авторизирован
                <CommentAction canCancel={false} />
            ) : (
                // отображаемый контент, если нет комментариев и пользователь авторизирован
                <FormComment
                    title="Новый комментарий"
                    canCancel={false}
                    userName={userName}
                />
            )}
        </div>
    );
}

export default Comments;
