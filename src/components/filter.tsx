import { useState } from "react";
import "../styles/filter.css";
import { useDispatch } from "react-redux";
import { getTodos } from "../redux/features/todo/todoSlice";

export default function Filter() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("active");

  const handleFilterChange = (value: string) => {
    if (filter !== value) {
      setFilter(value);
      switch (value) {
        case "all":
          dispatch(getTodos());
          break;
        case "active":
          dispatch(getTodos(false));
          break;

        case "completed":
          dispatch(getTodos(true));
          break;
        default:
          dispatch(getTodos(false));
          break;
      }
    }
  };

  return (
    <>
      <div className="filters">
        <button
          className={filter === "active" ? "filter-btn active" : "filter-btn"}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={
            filter === "completed" ? "filter-btn active" : "filter-btn"
          }
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
      </div>
    </>
  );
}
