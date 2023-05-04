import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
import Todo from "../../../models/todo";

export interface FormState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

//******************************CONSTANTS******************************
const initialState: FormState = {
  data: null,
  status: "idle",
  error: null,
};

//******************************ACTIONS******************************
export const getTodo = createAsyncThunk(
  "todos/getTodo",
  async (todoId: number) => {
    const response = await api.get(`/todos/get/${todoId}`);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todoId: number, data: any) => {
    const response = await api.put(`/todos/update/${todoId}`, data);
    return response.data;
  }
);

//******************************SLICE******************************
export const todoSlice = createSlice({
  name: "editTodoForm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
