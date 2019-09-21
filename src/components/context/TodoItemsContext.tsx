import React from "react";
import { TodoItem } from "../model/TodoItem";
import { ITodoItemsContext } from "./ITodoItemsContext";

enum TodoItemsActionType {
    Add,
    Delete
}

type TodoItemsContextProps = {children: React.ReactNode, initialState: ITodoItemsContext};

export class TodoItemsDispatchAction {
    constructor(public type: TodoItemsActionType, public payload: TodoItem | null)
    {

    }
}

type Dispatch = (action: TodoItemsDispatchAction) => void;

const TodoItemsContext = React.createContext<ITodoItemsContext | undefined>(undefined);
const TodoItemsDispatcherContext = React.createContext<Dispatch | undefined>(undefined);


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
    return (<TodoItemsContext.Provider value={state}>
        <TodoItemsDispatcherContext.Provider value={dispatch}>
            {props.children}
        </TodoItemsDispatcherContext.Provider>
    </TodoItemsContext.Provider>);
}

function useTodoItemsState(): ITodoItemsContext | undefined {
    const context : ITodoItemsContext | undefined = React.useContext(TodoItemsContext);
    if (context === undefined) {
        throw new Error('useTodoItemsState must be used within a TodoItemsContextProvider')
      }
    return context;
}

function useTodoItemsDispatch() {
    const context = React.useContext(TodoItemsDispatcherContext);
    if (context === undefined) {
        throw new Error('useTodoItemsDispatch must be used within a TodoItemsContextProvider')
      }
    return context;
}

export { TodoItemsActionType, useTodoItemsState, TodoItemsContextProvider, useTodoItemsDispatch };



