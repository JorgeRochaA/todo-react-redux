import "./App.css";
import TodoList from "./pages/todo-list";
import EditTodo from "./pages/edit-todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="todo/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
