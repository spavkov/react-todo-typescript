import React from "react";
import { TodoItem } from "../model/TodoItem";
import { ITodoItemsContext } from "./ITodoItemsContext";

enum TodoItemsActionType {
    Add,
    Delete
}

type TodoItemsContextProps = {
    children: React.ReactNode,
    initialState: ITodoItemsContext,
    reducer: (state: ITodoItemsContext, action: TodoItemsDispatchAction) => ITodoItemsContext
};

export class TodoItemsDispatchAction {
    constructor(public type: TodoItemsActionType, public payload: TodoItem | null)
    {

    }
}

export interface IStateAndDispatcher<T,V> {
    State: T;
    Dispatcher: React.Dispatch<V> | null;
}

const TodoItemsContext = React.createContext<IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction>>(
    {State : {
        Items: [],
        IsBusy: false
    }, Dispatcher : null});

function todoItemsReducer(state: ITodoItemsContext, action: TodoItemsDispatchAction): ITodoItemsContext {
    switch (action.type) {
        case TodoItemsActionType.Add: {
            if (action.payload != null) {
                state.Items.push(action.payload);
            } else {
                throw new Error("null payload in TodoItemsDispatchAction -> add");
            }
            return {
                Items: state.Items,
                IsBusy: false};
        }
        case TodoItemsActionType.Delete: {
            if (action.payload != null) {
                state.Items = state.Items.filter(item => item !== action.payload);
            } else {
                throw new Error("null payload in TodoItemsDispatchAction -> delete");
            }
            return state;
        }
    }
}

function TodoItemsContextProvider(props: TodoItemsContextProps) {
    const [state, dispatch] = React.useReducer(todoItemsReducer, props.initialState);
    return (<TodoItemsContext.Provider value={{State: state, Dispatcher: dispatch}}>
            {props.children}
    </TodoItemsContext.Provider>);
}

export { TodoItemsActionType, TodoItemsContextProvider, TodoItemsContext};



