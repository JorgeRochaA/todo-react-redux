import Todo from "../components/todo";
import "../styles/todo-list.css";
import Filter from "../components/filter";

export default function TodoList() {
  return (
    <>
      <div className="todo-list">
        <h2>To-Do List</h2>
        <Filter />
        <form>
          <input type="text" placeholder="Add task" />
        </form>
        <div className="todos-container">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
}
