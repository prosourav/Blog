import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPost, getUpdate, uploadFile } from "../../service/api";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    //  margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    fontSize: 22,
    margin: "0 22px",
  },
  textArea: {
    border: "none",
    width: "100%",
    marginTop: 50,
    fontSize: 18,
  },
}));

const initialValue = {
  title: "",
  description: "",
  picture: "",
  username: "Sourav saha",
  categories: "All",
  createdDate: new Date(),
};

const Update = ({ match }) => {
  const classes = useStyle();
  const history = useHistory();
  const [post, setPost] = useState(initialValue);
  const [file, setFile] = useState("");
  const [ImageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);
        const image = await uploadFile(formData);
        post.picture = image.data;
        setImageURL(image.data);
      }
    };
    getImage();
  }, [file]);

  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  const updatePost = async () => {
    await getUpdate(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Loading..." />
      <FormControl className={classes.form}>
        <label htmlFor="fileUpload">
          <AddCircle fontSize="large" color="action" />
          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <InputBase
          placeholder="title"
          className={classes.textField}
          value={post.title}
          onChange={handleChange}
          name="title"
        />
        <Button variant="contained" color="primary" onClick={updatePost}>
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        rows={5}
        placeholder="tell your story...."
        className={classes.textArea}
        value={post.description}
        onChange={handleChange}
        name="description"
      />
    </Box>
  );
};

export default Update;
