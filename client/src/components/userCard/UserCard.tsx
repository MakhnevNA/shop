import Spinner from "../spinner/Spinner";
import User from "../user/User";
import { IUserCardProps } from "../../types/userTypes";

function UserCard({ loadingStatus }: IUserCardProps) {
    return (
        <Spinner loadingStatus={loadingStatus}>
            <User />
        </Spinner>
    );
}

export default UserCard;
