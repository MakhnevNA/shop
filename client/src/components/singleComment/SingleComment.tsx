import FormComment from "../formComment/FormComment";
import CommentAction from "../commentsActions/CommentsActions";
import { setGeneralData } from "../../utils/setGeneralData";
import { ISingleCommentProps } from "../../types/commentsTypes";
import "./singleComments.scss";

function SingleComment({
    reply = false,
    comment,
    replyComment,
    setReplyComment,
    isAuth,
    userName,
}: ISingleCommentProps) {
    return (
        <>
            {!reply ? (
                <div className="Comments__item-parent">
                    <div className="Comments__item-info">
                        <div className="Comments__item-username">
                            {comment.username}
                        </div>

                        <div className="Comments__item-data">
                            {setGeneralData(comment.data)}
                        </div>
                    </div>
                    <div className="Comments__item-text">{comment.text}</div>
                    <div className="Comments__item-actions">
                        <button onClick={() => setReplyComment(comment)}>
                            Ответить
                        </button>
                    </div>
                    {replyComment?._id === comment._id && isAuth ? (
                        <FormComment
                            title="Новый комментарий"
                            setReplyComment={setReplyComment}
                            replyComment={replyComment}
                            userName={userName}
                        />
                    ) : (
                        replyComment?._id === comment._id &&
                        !isAuth && (
                            <CommentAction setReplyComment={setReplyComment} />
                        )
                    )}
                </div>
            ) : (
                reply &&
                "recipient" in comment && (
                    <li className="Comments__item-reply">
                        <div className="Comments__item-info">
                            <div className="Comments__item-username">
                                {comment.username}
                            </div>
                            <div className="Comments__item-recipient">
                                ответил(а) <span>{comment.recipient}</span>
                            </div>
                            <div className="Comments__item-data">
                                {setGeneralData(comment.data)}
                            </div>
                        </div>
                        <div className="Comments__item-text">
                            {comment.text}
                        </div>
                        <div className="Comments__item-actions">
                            <button onClick={() => setReplyComment(comment)}>
                                Ответить
                            </button>
                        </div>
                        {replyComment?._id === comment._id && isAuth ? (
                            <FormComment
                                title="Новый ответ"
                                setReplyComment={setReplyComment}
                                replyComment={replyComment}
                                userName={userName}
                            />
                        ) : (
                            replyComment?._id === comment._id &&
                            !isAuth && (
                                <CommentAction
                                    setReplyComment={setReplyComment}
                                />
                            )
                        )}
                    </li>
                )
            )}
        </>
    );
}

export default SingleComment;
