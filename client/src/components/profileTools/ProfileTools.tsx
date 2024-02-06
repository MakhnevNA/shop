import { Link } from "react-router-dom";
import { Button } from "antd";
import { IProfileToolsProps } from "../../types/profileTypes";
import "./profileTools.scss";

function ProfileTools({ userId, userName }: IProfileToolsProps) {
    return (
        <>
            {userName !== null ? (
                <>
                    <Link
                        to={`/profile/${userId}`}
                        className="ProfileTools-userName"
                    >
                        {userName}
                    </Link>
                    <Button type="primary" className="ProfileTools__actions">
                        Выйти
                    </Button>
                </>
            ) : (
                <Link to="/login" className="ProfileTools__actions">
                    <Button type="primary">Войти в аккаунт</Button>
                </Link>
            )}
        </>
    );
}

export default ProfileTools;
