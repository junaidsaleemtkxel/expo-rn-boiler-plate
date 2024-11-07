import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from "./slices/userSlice"; // Example slice

useReducer;
export const store = configureStore({
  reducer: {
    user: userReducer, // Add other reducers here
  },
});
