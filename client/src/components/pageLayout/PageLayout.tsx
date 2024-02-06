import { ReactNode } from "react";
import { Layout } from "antd";

const PageLayout = ({ children }: { children: ReactNode }) => {
    return <Layout>{children}</Layout>;
};

export default PageLayout;
