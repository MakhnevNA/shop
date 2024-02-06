import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import "./content.scss";
import { TLoadingStatusOptions } from "../../hooks/https.hook";

interface IContentProps {
    loadingStatus?: TLoadingStatusOptions;
    children: ReactNode;
}

function Content({ loadingStatus, children }: IContentProps) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();

    return (
        <Layout.Content className="Main">
            <div
                className={`Main__content ${
                    loadingStatus === "loading" ? "flexStyle" : ""
                }`}
                style={{
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    display:
                        location.pathname === "/login" ||
                        location.pathname === "/registration"
                            ? "flex"
                            : "block",
                }}
            >
                {children}
            </div>
        </Layout.Content>
    );
}

export default Content;
