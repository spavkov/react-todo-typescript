import * as React from "react";
import { TodoItem} from "./model/TodoItem";

interface ITodoListProps {
    Items: TodoItem[];
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({Items}) => {
    return (
        <div>
            {Items.map((item, index) => <div key={index}>{item.Title}</div> )}
        </div>
    );
};

export default TodoList;
