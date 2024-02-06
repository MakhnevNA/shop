import { Layout } from "antd";
import Title from "../../components/title/Title";
import HeaderTools from "../../components/headerTools/HeaderTools";
import basketStore from "../../store/basketStore";

import "./header.scss";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    // потом из стора буду данные получать, пока такие константы
    const userName = null;
    const userId = 111;

    const { basket } = basketStore;

    return (
        <Layout.Header className="Header">
            <Title />
            <HeaderTools
                amount={basket.amount}
                userName={userName}
                userId={userId}
            />
        </Layout.Header>
    );
});

export default Header;
