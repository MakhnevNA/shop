import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import LoginForm from "../../components/loginForm/LoginForm";

function LoginPage() {
    return (
        <PageLayout>
            <Header />
            <Content>
                <LoginForm />
            </Content>
        </PageLayout>
    );
}

export default LoginPage;
