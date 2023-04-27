import { useEffect, useState } from "react";
import "../styles/filter.css";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Filter() {
  const todosLength = useSelector(
    (state: RootState) => state.todo.todos.length
  );
  const [filter, setFilter] = useState("");
  const handleFilterChange = (value: string) => {
    setFilter(value);
  };
  useEffect(() => {
    if (todosLength) {
      setFilter("all");
    }
  }, []);

  return (
    <>
      <div className="filters">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => handleFilterChange("all")}
          disabled={!todosLength}
        >
          All
        </button>
        <button
          className={filter === "active" ? "filter-btn active" : "filter-btn"}
          onClick={() => handleFilterChange("active")}
          disabled={!todosLength}
        >
          Active
        </button>
        <button
          className={
            filter === "completed" ? "filter-btn active" : "filter-btn"
          }
          onClick={() => handleFilterChange("completed")}
          disabled={!todosLength}
        >
          Completed
        </button>
      </div>
    </>
  );
}
