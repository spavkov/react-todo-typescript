import * as React from "react";
import TodoListView from "../components/TodoListView";
import { TodoItem } from "../components/model/TodoItem";

interface IIndexProps {
    Title: string;
}

const IndexPage: React.FunctionComponent<IIndexProps> = ({Title}) => {

    const items: TodoItem[] = [
        new TodoItem("Item 1", false),
        new TodoItem("Item 2", false),
    ];

    return (<TodoListView Items={items} />);
};

export default IndexPage;
