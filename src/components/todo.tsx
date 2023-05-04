import TodoModel from "../models/todo";
import "../styles/todo.css";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../redux/features/todo/todoSlice";
import { Link } from "react-router-dom";

export default function Todo(todo: TodoModel) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodoAction(todo.id));
  };
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
            <div className="edit-btn">
              <Link className="button-link" to={`/todo/edit/${todo.id}`}>
                Edit Todo
              </Link>
            </div>
          ) : null}
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
