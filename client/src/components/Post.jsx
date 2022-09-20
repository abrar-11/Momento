import React from "react";

const Post = ({ post, editId, setEditId }) => {
   const handleEdit = (_id) => {
      setEditId(_id);
   };
   return (
      <>
         <div className="w-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href="#">
               <img className="rounded-t-lg" src={post.imgfile} alt="" />
            </a>
            <div className="p-5">
               <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                     {post.title}
                  </h5>
               </a>
               <p className="mb-3 font-normal text-gray-700">{post.message}</p>
               <button
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  onClick={() => handleEdit(post._id)}
               >
                  Read more
                  <svg
                     aria-hidden="true"
                     className="ml-2 -mr-1 w-4 h-4"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>
         </div>
      </>
   );
};

export default Post;
