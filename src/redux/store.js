import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter";
import todoReducer from "../slices/todo";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoReducer,
  },
});
