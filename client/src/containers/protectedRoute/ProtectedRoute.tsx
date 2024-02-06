import { Navigate } from "react-router";
import { IProtectedRouteProps } from "../../types/protectedRouteTypes";

function ProtectedRoute(props: IProtectedRouteProps) {
    if (!props.isAllowed) {
        return <Navigate to={props.redirectPath} replace />;
    }

    return props.children;
}

export default ProtectedRoute;
