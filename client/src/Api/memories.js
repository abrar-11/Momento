import axios from "axios";

const url = "http://localhost:5000/memory";

export const fetchAllMemories = () => {
   return axios.get(url);
};