import Todo from "../components/todo";
import "../styles/todo-list.css";
import Filter from "../components/filter";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TodoForm from "../components/todo-form";

export default function TodoList() {
  const todo = useSelector((state: RootState) => state.todo.todos);
  return (
    <>
      <div className="todo-list">
        <h2>To-Do List Filters</h2>
        <Filter />
        <TodoForm />
        <h2>To-Do List</h2>
        <div className="todos-container">
          {todo.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </div>
      </div>
    </>
  );
}
