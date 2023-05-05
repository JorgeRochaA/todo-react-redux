import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

export interface TodoState {
  message: "";
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

//******************************CONSTANTS******************************

const initialState: TodoState = {
  message: "",
  status: "idle",
  error: null,
};

//******************************ACTIONS******************************
export const markAsCompleted = createAsyncThunk(
  "todos/markAsCompleted",
  async (todoId: number) => {
    const response = await api.put(`/todos/mark-as-completed/${todoId}`);
    console.log(response);
    return response.data;
  }
);

//******************************SLICE******************************

export const markAsCompletedSlice = createSlice({
  name: "markAsCompleted",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(markAsCompleted.pending, (state) => {
        state.status = "loading";
      })
      .addCase(markAsCompleted.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(markAsCompleted.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default markAsCompletedSlice.reducer;
