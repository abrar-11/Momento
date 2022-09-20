import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get_memories } from "../Features/MemoriesSlice";
import Post from "./Post";
import axios from "axios";
const Posts = ({ editId, setEditId }) => {
   const posts = useSelector((states) => states.memory.memories);

   return (
      <div className="p-5 flex justify-center items-center flex-wrap">
         {posts.map((post) => {
            return <Post post={post}  editId={editId} setEditId={setEditId}/>;
         })}
      </div>
   );
};

export default Posts;
