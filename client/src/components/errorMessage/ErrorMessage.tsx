import { Link } from "react-router-dom";
import img from "../../assets/images/errorMessage/error.gif";

function ErrorMessage() {
    return (
        <div
            style={{
                backgroundColor: "white",
                minHeight: "calc(100vh - 130px)",
                margin: "30px 65px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                style={{
                    display: "block",
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                    marginTop: "-100px",
                }}
                src={img}
                alt="errorMessage"
            />
            <Link
                to="/"
                style={{
                    display: "block",
                    margin: "0 auto",
                    width: "250px",
                    padding: "10px 0",
                    fontSize: "20px",
                    textAlign: "center",
                }}
            >
                Back to main page
            </Link>
        </div>
    );
}

export default ErrorMessage;
