import { IComments, IItem, IResponses } from "./catalogTypes";

export interface IDataCommentForPatchRequest {
    username: string;
    text: string;
    data: Date;
    recipient?: string;
    parentId?: string | number;
    responses?: IResponses[] | [];
}

export interface IFormCommentProps {
    title: string;
    setReplyComment?: (responce: IResponses | IComments | null) => void;
    canCancel?: boolean;
    replyComment?: IResponses | IComments | null;
    userName: string;
}

export interface ICommentsProps {
    article: IItem | null;
}

export interface ICommentProps {
    article: IItem | null;
    replyComment: IResponses | IComments | null;
    setReplyComment: (_id: IResponses | IComments | null) => void;
    isAuth: boolean;
    userName: string;
}

export interface ISingleCommentProps {
    reply?: boolean;
    comment: IComments | IResponses;
    replyComment: IResponses | IComments | null;
    setReplyComment: (_id: IResponses | IComments | null) => void;
    isAuth: boolean;
    userName: string;
}

export interface ICommentActionProps {
    canCancel?: boolean;
    setReplyComment?: (_id: null) => void;
}
