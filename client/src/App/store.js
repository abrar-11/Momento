import { configureStore } from "@reduxjs/toolkit";
import memoryReducer from "../Features/MemoriesSlice";

export const store = configureStore({
   reducer: {
      memoryReducer,
   },
});
