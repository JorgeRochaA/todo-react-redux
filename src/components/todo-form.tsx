import "../styles/todo-form.css";

export default function TodoForm() {
  return (
    <>
      <h2>Add New Task Form</h2>
      <form>
        <input type="text" placeholder="Task Title" />
        <input type="text" placeholder="Task Description" />
        <div className="checkbox-container">
          <input type="checkbox" />
          <label htmlFor="task name">Completed</label>
        </div>
        <button>Add Task</button>
      </form>
    </>
  );
}