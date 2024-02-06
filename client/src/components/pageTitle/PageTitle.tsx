import "./pageTitle.scss";

function PageTitle({ name }: { name: string }) {
    return <h2 className="PageTitle">{name}</h2>;
}

export default PageTitle;
