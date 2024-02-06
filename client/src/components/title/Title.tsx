import { Link } from "react-router-dom";

function Title() {
    return (
        <Link to="/" className="Header__title">
            <h1>Магазин</h1>
        </Link>
    );
}

export default Title;
