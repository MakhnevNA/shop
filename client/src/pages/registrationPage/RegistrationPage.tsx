import PageLayout from "../../components/pageLayout/PageLayout";
import Header from "../../containers/header/Header";
import Content from "../../components/content/Content";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

function RegistrationPage() {
    return (
        <PageLayout>
            <Header />
            <Content>
                <RegistrationForm />
            </Content>
        </PageLayout>
    );
}

export default RegistrationPage;
