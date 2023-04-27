import TodoModel from "../models/todo";
import "../styles/todo.css";
export default function Todo(todo: TodoModel) {
  return (
    <>
      <li className="todo">
        <div className="task-actions-container">
          <div className="checkbox-container">
            <input type="checkbox" checked={todo.completed} />
            <label htmlFor="task name">{todo.title}</label>
          </div>
          <div className="actions">
            <button className="edit-btn">Edit Title</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
        <div className="todo-description">
          <p> {todo.description} </p>
        </div>
      </li>
    </>
  );
}
