import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import UserCard from "../../components/userCard/UserCard";
import { useHttp } from "../../hooks/https.hook";

function ProfilePage() {
    const { loadingStatus } = useHttp();

    return (
        <PageLayout>
            <Header />
            <Content>
                <UserCard loadingStatus={loadingStatus} />
            </Content>
        </PageLayout>
    );
}

export default ProfilePage;
