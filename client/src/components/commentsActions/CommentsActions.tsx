import { Link } from "react-router-dom";
import { ICommentActionProps } from "../../types/commentsTypes";
import "./commentsActions.scss";

function CommentAction({
    canCancel = true,
    setReplyComment,
}: ICommentActionProps) {
    return (
        <div className="Comments__actions">
            <Link to="/login">Войдите</Link>, чтобы иметь возможность
            комментировать.
            {canCancel && setReplyComment && (
                <button onClick={() => setReplyComment(null)}>Отмена</button>
            )}
        </div>
    );
}

export default CommentAction;
