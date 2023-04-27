import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
import Todo from "../../../models/todo";

export interface FormState {
  data: {
    message: string;
    todo: Todo;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

//******************************CONSTANTS******************************

const initialState: FormState = {
  data: {
    message: "",
    todo: {
      id: 0,
      title: "",
      description: "",
      completed: false,
      priority_index: 0,
      created_at: "",
      updated_at: "",
    },
  },
  status: "idle",
  error: null,
};

//******************************ACTIONS******************************

export const sendFormData = createAsyncThunk(
  "form/sendFormData",
  async (formData: FormData) => {
    const response = await api.post("/todos/create", formData);
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
        console.log("pending");
      })
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
      });
  },
});

export default todoSlice.reducer;
