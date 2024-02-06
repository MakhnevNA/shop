import { Select } from "antd";
import "./catalogPerPageSelector.scss";

interface ICatalogPerPageSelectorProps {
    value: number;
    changeLimitItems: (newLimit: number) => void;
}

function CatalogPerPageSelector({
    value,
    changeLimitItems,
}: ICatalogPerPageSelectorProps) {
    const option = [6, 10, 15, 20, 40];
    return (
        <div className="PageSelector">
            <label className="PageSelector__label" htmlFor="catalogPerPage">
                Показывать товаров на странице:
            </label>
            <Select
                className="PageSelector__select"
                defaultValue={value}
                id="catalogPerPage"
                onChange={(newValue) => changeLimitItems(newValue)}
            >
                {option.map((item) => {
                    return (
                        <Select.Option
                            key={item}
                            style={{ textAlign: "center" }}
                            value={item}
                        >
                            {item}
                        </Select.Option>
                    );
                })}
            </Select>
        </div>
    );
}

export default CatalogPerPageSelector;
