import axios from "axios";

const url = `http://localhost:8000`;

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("error while create post ", error);
  }
};

export const getPosts = async (param) => {
  try {
    const response = await axios.get(`${url}/posts${param}`);
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

export const deleteItem = async (id) => {
  try {
    return await axios.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log("error while fetching data from database ", error);
  }
};

export const uploadFile = async (post) => {
  // console.log(data);
  try {
    // return await axios.post(`${url}/file/upload/${data}`);
    return await axios.post(`${url}/file/upload`, post);
  } catch (error) {
    console.log("error while fetching data from database ", error);
  }
};
