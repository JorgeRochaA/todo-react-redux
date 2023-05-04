import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTodo } from "../redux/features/form/editTodoFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loader from "../components/loader";
import { useForm } from "react-hook-form";
import { updateTodo } from "../redux/features/form/editTodoFormSlice";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  description: string;
};

export default function EditTodo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector(
    (state: RootState) => state.editTodoForm
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    dispatch(getTodo(id));
  }, [id]);

  useEffect(() => {
    if (status === "succeeded") {
      setValue("title", data.todo.title);
      setValue("description", data.todo.description);
    }
  }, [status]);

  const onSubmit = (dataSubmitted: any) => {
    dispatch(updateTodo(data.todo.id, dataSubmitted));
    if (status === "succeeded") {
      navigate("/");
    }
  };

  return (
    <>
      <div className="todo-list">
        <div>
          <h2>Edit Todo #{id}</h2>
          {data ? (
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
              <button>Edit Todo</button>
            </form>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}
