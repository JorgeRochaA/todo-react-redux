import { useState } from "react";
import "../styles/filter.css";

export default function Filter() {
  const [filter, setFilter] = useState("all");
  const handleFilterChange = (value: string) => {
    setFilter(value);
  };
  return (
    <>
      <div className="filters">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
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
      </div>
    </>
  );
}
