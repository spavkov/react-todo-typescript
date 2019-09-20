import * as React from "react";
import { TodoItem } from "./model/TodoItem";
import TodoItemView from "./TodoItemView";

interface ITodoListProps {
    Items: TodoItem[];
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({Items}) => {
    return (
        <div>
            {Items.map((item, index) => <TodoItemView Index={index} Item={item} /> )}
        </div>
    );
};

export default TodoList;
