import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/todo/todoSlice";
import TodoFormReducer from "./features/form/formSlice";
import EditTodoFormReducer from "./features/form/editTodoFormSlice";
import markAsCompletedReducer from "./features/todo/mark-as-completed";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    todoForm: TodoFormReducer,
    editTodoForm: EditTodoFormReducer,
    markAsCompleted: markAsCompletedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
