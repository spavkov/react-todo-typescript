import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import { ITodoItemsContext } from "./components/context/ITodoItemsContext";
import { TodoItem } from "./components/model/TodoItem";
import { TodoItemsContextProvider } from "./components/context/TodoItemsContext";

const todoItemsContext : ITodoItemsContext = {
  Items: [
    new TodoItem("item1", true),
    new TodoItem("item2", false),
  ],
  IsBusy: false,
};

const App: React.FC = () => {
  return (
    <TodoItemsContextProvider initialState={todoItemsContext}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={IndexPage} />
        <Route path="/about/" component={AboutPage} />
      </div>
    </Router>
    </TodoItemsContextProvider>
  );
};

export default App;
