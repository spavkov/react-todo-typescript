import * as React from "react";
import TodoListView from "../components/TodoListView";
import AddTodoItem from "../components/AddTodoItemView";

interface IIndexProps {
    Title: string;
}

const IndexPage: React.FunctionComponent<IIndexProps> = () => {

    return (
        <div>
            <TodoListView />
            <AddTodoItem />
        </div>
    );
};

export default IndexPage;
