import axios from "axios";

const url = `http://localhost:8000`;

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("error while create post ", error);
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${url}/posts`);
    return response.data;
  } catch (error) {
    console.log("error while fetching data from database ", error);
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${url}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while fetching data from database ", error);
  }
};

export const getUpdate = async (id, post) => {
  try {
    return await axios.post(`${url}/update/${id}`, post);
  } catch (error) {
    console.log("error while fetching data from database ", error);
  }
};
