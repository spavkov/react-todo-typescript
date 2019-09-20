import * as React from "react";
import { TodoItem } from "./model/TodoItem";
import TodoItemView from "./TodoItemView";

interface ITodoListViewProps {
    Items: TodoItem[];
}

const TodoListView: React.FunctionComponent<ITodoListViewProps> = ({Items}) => {
    return (
        <div>
            {Items.map((item, index) => <TodoItemView Index={index} Item={item} /> )}
        </div>
    );
};

export default TodoListView;
