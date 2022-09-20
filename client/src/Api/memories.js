import axios from "axios";

const url = "http://localhost:5000/memory";

export const fetchAllMemories = () => {
   return axios.get(url);
};

export const createNewMemory = (data) => {
   return axios.post(url, data);
};

export const update = (data) => {
   return axios.put(url, data);
};
