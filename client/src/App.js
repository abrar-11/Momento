import React, { useEffect } from "react";
import { getMemories } from "./Features/MemoriesSlice";
import { useDispatch } from "react-redux";
const App = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getMemories());
   }, []);

   return <div className="bg-gray-900 w-screen h-screen text-white">App</div>;
};

export default App;
