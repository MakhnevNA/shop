import { ReactNode } from "react";

export interface IProtectedRouteProps {
    isAllowed: boolean;
    redirectPath: string;
    children: ReactNode;
}
