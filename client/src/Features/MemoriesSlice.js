import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchAllMemories } from "../Api/memories";

export const getMemories = createAsyncThunk(
   "memories/getMemories",
   async () => {
    //   console.log("inside");
      const { data } = await fetchAllMemories();

      return data;
   }
);

const initialState = {
   memories: [],
   isLoading: false,
};

const MemoriesSlice = createSlice({
   name: "memories",
   initialState,
   reducers: {
      checking: (state) => {
         state.isLoading = true;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getMemories.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getMemories.fulfilled, (state, action) => {

         state.memories = action.payload.data;
         state.isLoading = false;
      });
   },
});

export const get_memories = (state) => state.MemoriesSlice.memories;
export const { checking } = MemoriesSlice.actions;
export default MemoriesSlice.reducer;
