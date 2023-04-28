import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TodoModel from "../../../models/todo";
import api from "../../../api/api";
export interface TodoState {
  todos: TodoModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

//******************************CONSTANTS******************************
const initialState: TodoState = {
  todos: [],
  status: "idle",
  error: null,
};
//******************************ACTIONS******************************
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (filter?: boolean) => {
    let response;
    if (filter !== undefined) {
      response = await api.get(`todos/get-all/?completed=${filter}`);
    } else {
      response = await api.get("/todos/get-all");
    }

    return response.data.todos;
  }
);

export const deleteTodoAction = createAsyncThunk(
  "data/fetchData",
  async (params, { dispatch }) => {
    const response = await api.delete(`/todos/delete/${params}`);
    dispatch(deleteTodo(response.data.id));
    return response.data;
  }
);
//******************************SLICE******************************
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
