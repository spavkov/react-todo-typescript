import * as React from "react";
import { useTodoItemsState } from "./context/TodoItemsContext";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import TodoItemView from "./TodoItemView";

const TodoListView: React.FunctionComponent = () => {

    const context : ITodoItemsContext | undefined = useTodoItemsState();

    return (
        <div>
            {
            context != null && context.Items != null && context.Items.length > 0 ?
            context.Items.map((item, index) => <TodoItemView Index={index} Item={item} /> ) : <div>"no items"</div>
            }
        </div>
        );
};

export default TodoListView;