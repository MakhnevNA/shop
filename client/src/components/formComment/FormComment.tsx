import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useHttp } from "../../hooks/https.hook";
import {
    IDataCommentForPatchRequest,
    IFormCommentProps,
} from "../../types/commentsTypes";
import "./formComment.scss";

function FormComment({
    title,
    setReplyComment,
    canCancel = true,
    replyComment,
    userName,
}: IFormCommentProps) {
    const { request, loadingStatus } = useHttp();
    const params = useParams();

    const [text, setText] = useState<string>("");

    // "Коробка" для хранения данных для отправки комментария
    const dataCommentForPatchRequest: IDataCommentForPatchRequest = {
        username: userName,
        text: text,
        data: new Date(),
    };

    // Проверяем, что если можно отменить коммент и выбран коммент на который отвечаем
    if (canCancel && replyComment) {
        // добавляем имя кому отвечаем на комментарий
        dataCommentForPatchRequest.recipient = replyComment.username.toString();
        // добавляем id родиетля, где лежит комментарий (чтобы в БД было легко найти родителя)
        dataCommentForPatchRequest.parentId =
            "parentId" in replyComment && replyComment.parentId
                ? replyComment.parentId
                : replyComment?._id;
    } else {
        // если мы создаем новый коммент, то есть никому не отвечаем
        // всталвяем пустой массив с ответами
        dataCommentForPatchRequest.responses = [];
    }

    //Отправка patch запроса на сервер, с последующим обнулением локального стейта введенных данных
    const patchRequest = () => {
        request({
            url: `http://localhost:3000/article/${params.id}`,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataCommentForPatchRequest),
        })
            .then(() => {
                setText("");
            })
            .catch((error) => {
                console.error(
                    "Произошла ошибка при выполнении PATCH-запроса:",
                    error
                );
            });
    };

    return (
        <form className="NewComment" onSubmit={() => patchRequest()}>
            <label htmlFor="commentInput" className="NewComment__label">
                {title}
            </label>
            <TextArea
                id="commentInput"
                value={text}
                placeholder="Оставьте свой комментарий (минимум 10 символов)"
                onChange={(e) => setText(e.target.value)}
            />
            <div style={{ display: "flex" }}>
                <Tooltip
                    title={
                        text.length < 10
                            ? "Минимальное количество символов: 10"
                            : ""
                    }
                >
                    <Button
                        htmlType="submit"
                        style={{ marginRight: canCancel ? "15px" : "" }}
                        type="primary"
                        disabled={
                            loadingStatus === "loading" ||
                            text.replace(/\s/g, "").length < 10
                                ? true
                                : false
                        }
                    >
                        Отправить
                    </Button>
                </Tooltip>

                {canCancel && (
                    <Button onClick={() => setReplyComment!(null)}>
                        Отменить
                    </Button>
                )}
            </div>
        </form>
    );
}

export default FormComment;
