import "../styles/todo.css";
export default function Todo() {
  return (
    <>
      <li className="todo">
        <div className="checkbox-container">
          <input type="checkbox" id="task2" />
          <label htmlFor="task1">Task 1</label>
        </div>
        <div className="actions">
          <button className="edit-btn">Edit Title</button>
          <button className="delete-btn">Delete</button>
        </div>
      </li>
    </>
  );
}
