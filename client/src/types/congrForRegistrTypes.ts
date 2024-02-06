export type TIsSuccessRegistr = "success" | "unSuccess" | "error";

export interface ICongrForRegistr {
    setIsSuccessRegistr: (status: TIsSuccessRegistr) => void;
}
