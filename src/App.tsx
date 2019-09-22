import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import { TodoItemsContextProvider } from "./components/context/TodoItemsContext";

const App: React.FC = () => {
  return (
    <TodoItemsContextProvider>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo's</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={TodosPage} />
        <Route path="/about/" component={AboutPage} />
      </div>
    </Router>
    </TodoItemsContextProvider>
  );
};

export default App;
