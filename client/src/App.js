import React, { useEffect, useState } from "react";
import { getMemories } from "./Features/MemoriesSlice";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts";
import Form from "./components/Form";
const App = () => {
   const dispatch = useDispatch();
   const [editId, setEditId] = useState(null)

   useEffect(() => {
      dispatch(getMemories());
   }, []);

   return (
      <div className="w-screen h-screen flex p-10">
         <div className="w-8/12">
            <Posts  editId={editId} setEditId={setEditId}/>
         </div>

         <div className="w-4/12">
            <Form editId={editId} setEditId={setEditId}/>
         </div>
      </div>
   );
};

export default App;
