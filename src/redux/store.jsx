import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
