import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFormData } from "../redux/features/form/formSlice";
import type { RootState } from "../redux/store";
import "../styles/todo-form.css";

export default function TodoForm() {
  const { status, error } = useSelector((state: RootState) => state.todoForm);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendFormData(formData));
  };

  useEffect(() => {
    if (status === "succeeded") {
      setFormData({ title: "", description: "" });
    }
  }, [status]);

  return (
    <>
      <h2>Add New Task Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
