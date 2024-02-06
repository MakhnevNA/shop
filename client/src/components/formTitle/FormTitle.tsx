import "./formTitle.scss";

function FormTitle({ title }: { title: string }) {
    return <h3 className="Form__title">{title}</h3>;
}

export default FormTitle;
