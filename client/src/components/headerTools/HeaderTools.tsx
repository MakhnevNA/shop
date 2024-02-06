import LocalSelect from "../../containers/localSelect/LocalSelect";
import BasketTool from "../basketTool/BasketTool";
import ProfileTools from "../profileTools/ProfileTools";
import { IHeaderToolsProps } from "../../types/headerTypes";
import "./hederTools.scss";

const HeaderTools = ({ amount, userName, userId }: IHeaderToolsProps) => {
    return (
        <div className="Header__row">
            <LocalSelect />
            <BasketTool amount={amount} />
            <ProfileTools userId={userId} userName={userName} />
        </div>
    );
};

export default HeaderTools;
