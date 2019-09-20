import * as React from "react";
import { TodoItem } from "./model/TodoItem";

interface ITodoItemViewProps {
    Item: TodoItem;
    Index: number;
}

const TodoItemView: React.FunctionComponent<ITodoItemViewProps> = ({Item, Index}) => {
    return (<div key={Index}>{Item.Title}</div>);
};

export default TodoItemView;