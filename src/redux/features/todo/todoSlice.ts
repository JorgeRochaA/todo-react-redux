import { createSlice } from "@reduxjs/toolkit";
import TodoModel from "../../../models/todo";

export interface TodoState {
  todos: TodoModel[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "Test",
      description: "Test",
      completed: false,
      priority_index: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default todoSlice.reducer;
