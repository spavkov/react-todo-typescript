import React, {useState} from "react";
import { useTodoItemsDispatch, TodoItemsDispatchAction, TodoItemsActionType } from "./context/TodoItemsContext";
import { TodoItem } from "./model/TodoItem";

const AddTodoItem : React.FunctionComponent = () => {

    const [title, setTitle] = useState("");
    const dispatch = useTodoItemsDispatch();

    const action : TodoItemsDispatchAction = new TodoItemsDispatchAction(TodoItemsActionType.Add, new TodoItem(title, false));

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(action);
        //props.addNewItemFunction(title);
        setTitle("");
    };

    const handleChange = (event: any) => {
        setTitle(event.target.value);
    };

    return (
        <form className="js-form" onSubmit={handleSubmit}>
            <input type="text" aria-label="Enter a new todo item"
            placeholder="E.g. Buy milk on a way home" className="js-todo-input" value={title} onChange={handleChange} />
        </form>
    );
};

export default AddTodoItem;

