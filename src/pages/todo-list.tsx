import Todo from "../components/todo";
import "../styles/todo-list.css";
import Filter from "../components/filter";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import TodoForm from "../components/todo-form";
import { useEffect } from "react";
import { getTodos } from "../redux/features/todo/todoSlice";
import Loader from "../components/loader";
import ErrorBanner from "../components/error-banner";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    dispatch(getTodos(false));
  }, [dispatch]);

  if (status === "failed" && error) {
    return <ErrorBanner error={error} />;
  }

  return (
    <>
      <div className="todo-list">
        <div>
          <h2>To-Do List Filters</h2>
          <Filter />
          <TodoForm />
        </div>
        <div className="list-container">
          <h2>To-Do List</h2>
          {status === "loading" ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <div className="todos-container">
              {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
