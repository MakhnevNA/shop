import SingleComment from "../singleComment/SingleComment";
import { ICommentProps } from "../../types/commentsTypes";
import "./comment.scss";

function Comment({
    article,
    replyComment,
    setReplyComment,
    isAuth,
    userName,
}: ICommentProps) {
    return (
        <div className="Comments__content">
            <ul className="Comments__list">
                {article &&
                    article.comments.length > 0 &&
                    article.comments.map((item) => {
                        return (
                            <li key={item._id} className="Comments__item">
                                <SingleComment
                                    comment={item}
                                    replyComment={replyComment}
                                    setReplyComment={setReplyComment}
                                    isAuth={isAuth}
                                    userName={userName}
                                />

                                {item.responses &&
                                    item.responses.length > 0 && (
                                        <ul className="Comments__list-reply">
                                            {item.responses.map((response) => {
                                                return (
                                                    <SingleComment
                                                        key={response._id}
                                                        comment={response}
                                                        reply={true}
                                                        replyComment={
                                                            replyComment
                                                        }
                                                        setReplyComment={
                                                            setReplyComment
                                                        }
                                                        isAuth={isAuth}
                                                        userName={userName}
                                                    />
                                                );
                                            })}
                                        </ul>
                                    )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default Comment;
