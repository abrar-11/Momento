import { configureStore } from "@reduxjs/toolkit";
import memory from "../Features/MemoriesSlice";

export const store = configureStore({
   reducer: {
      memory,
   },
});
