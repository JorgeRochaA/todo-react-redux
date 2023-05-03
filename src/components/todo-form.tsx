import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendFormData } from "../redux/features/form/formSlice";
import type { RootState } from "../redux/store";
import "../styles/todo-form.css";
import { useForm } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

export default function TodoForm() {
  const { status, error } = useSelector((state: RootState) => state.todoForm);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(sendFormData(data));
  };

  useEffect(() => {
    if (status === "succeeded") {
      reset();
    }
  }, [status]);

  return (
    <>
      <h2>Add New Task Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Task Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="error-message">This field is required.</span>
        )}
        <textarea
          placeholder="Task Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="error-message">This field is required.</span>
        )}
        <button>Add Task</button>
      </form>
    </>
  );
}
