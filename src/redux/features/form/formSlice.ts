import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
import Todo from "../../../models/todo";
import { addTodo } from "../todo/todoSlice";

export interface FormState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

//******************************CONSTANTS******************************

const initialState: FormState = {
  status: "idle",
  error: null,
};

//******************************ACTIONS******************************

export const sendFormData = createAsyncThunk(
  "data/fetchData",
  async (params, { dispatch }) => {
    const response = await api.post("/todos/create", { params });
    dispatch(addTodo(response.data.todo));
    return response.data;
  }
);

//******************************SLICE******************************
export const todoSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
