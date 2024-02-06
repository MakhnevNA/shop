import { ReactNode } from "react";
import "./List.scss";

interface IListProps {
    children: ReactNode;
}

function List(props: IListProps) {
    return <ul className="Main__list">{props.children}</ul>;
}

export default List;
