import TodoModel from "../models/todo";
import "../styles/todo.css";
export default function Todo(todo: TodoModel) {
  return (
    <>
      <li className="todo">
        <div className="checkbox-container">
          <input type="checkbox" />
          <label htmlFor="task-name">{todo.title}</label>
        </div>
        <div className="todo-description">
          {todo.description} <h1>{todo.completed}</h1>
        </div>
        <div className="actions">
          {!todo.completed ? (
            <button className="edit-btn">Edit Title</button>
          ) : null}
          <button className="delete-btn">Delete</button>
        </div>
      </li>
    </>
  );
}
