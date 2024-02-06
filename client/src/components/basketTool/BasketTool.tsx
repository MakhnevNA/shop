import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./basketTool.scss";

const BasketTool = ({ amount }: { amount: number }) => {
    return (
        <Link to="/basket" className="Header__cart">
            <FaShoppingCart size={20} className="FaShoppingCart" />
            {amount > 0 && (
                <span
                    className="Header__cart-count"
                    style={{
                        width: amount < 10 ? "16px" : "18px",
                        height: amount < 10 ? "16px" : "18px",
                    }}
                >
                    {amount}
                </span>
            )}
        </Link>
    );
};

export default BasketTool;
