import { Link } from "react-router-dom";
import { Button } from "antd";
import { ICongrForRegistr } from "../../types/congrForRegistrTypes";
import "./congrForRegistr.scss";

function CongrForRegistr({ setIsSuccessRegistr }: ICongrForRegistr) {
    return (
        <div className="CongrForRegistr">
            <h5 className="CongrForRegistr__title">
                Поздравляем с успешной регистрацией
            </h5>

            <Link to="/login" className="CongrForRegistr__link">
                <Button
                    type="primary"
                    onClick={() => setIsSuccessRegistr("unSuccess")}
                >
                    Спасибо
                </Button>
            </Link>
        </div>
    );
}

export default CongrForRegistr;
