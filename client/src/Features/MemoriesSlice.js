import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchAllMemories, createNewMemory,update } from "../Api/memories";

export const getMemories = createAsyncThunk(
   "memories/getMemories",
   async () => {
      //   console.log("inside");
      const { data } = await fetchAllMemories();

      return data;
   }
);
export const createMemory = createAsyncThunk(
   "memories/createMemory",
   async (e) => {
      //   console.log("inside");
      const { data } = await createNewMemory(e);

      return data;
   }
);



export const updateMemory = createAsyncThunk("memories/createMemory",async(e)=>{
   const {data} =  await update(e)
})


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
      builder.addCase(createMemory.fulfilled, (state, action) => {
         console.log(action.payload.data);
         state.memories = [action.payload, ...state.memories];
         state.isLoading = false;
      });
   },
});

export const get_memories =  (state) => state.memories;
export const { checking } = MemoriesSlice.actions;
export default MemoriesSlice.reducer;
