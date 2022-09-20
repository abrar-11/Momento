import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createMemory } from "../Features/MemoriesSlice";

const Form = ({ editId, setEditId }) => {
   const dispatch = useDispatch();

   const postData = useSelector((state) =>
      editId ? state.memory.memories.find((e) => e._id === editId) : null
   );
   const [post, setpost] = useState({
      creator: "",
      title: "",
      message: "",
      tags: "",
      imgfile: "",
   });

   useEffect(() => {
      if (postData) setpost(postData);
   }, [postData]);

   const handleChange = (e) => {
      setpost({ ...post, [e.target.name]: e.target.value });
   };
   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(createMemory(post));
   };
   return (
      <form classNameName="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <div classNameName="mb-4">
            <input
               classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Creator"
               name="creator"
               onChange={(e) => handleChange(e)}
            />
         </div>
         <div classNameName="mb-4">
            <input
               classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Title"
               name="title"
               onChange={(e) => handleChange(e)}
            />
         </div>
         <div classNameName="mb-4">
            <input
               classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Message"
               name="message"
               onChange={(e) => handleChange(e)}
            />
         </div>

         <div classNameName="mb-4">
            <input
               classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Tags"
               name="tags"
               onChange={(e) => handleChange(e)}
            />
         </div>
         <div classNameName="mb-4">
            <FileBase
               type="file"
               multiple={false}
               onDone={({ base64 }) => setpost({ ...post, imgfile: base64 })}
            />
         </div>

         <div classNameName="flex items-center justify-between">
            <button
               classNameName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="button"
               onClick={(e) => onSubmit(e)}
            >
               Create
            </button>
         </div>
      </form>
   );
};

export default Form;
