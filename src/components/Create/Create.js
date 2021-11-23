import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { createPost } from "../../service/api";

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

const Create = () => {
  const [post, setPost] = useState(initialValue);
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  const savePost = async () => {
    await createPost(post);
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Loading..." />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase
          name="title"
          onChange={handleChange}
          placeholder="title"
          className={classes.textField}
        />
        <Button variant="contained" color="primary" onClick={savePost}>
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        minRows={5}
        placeholder="tell your story...."
        className={classes.textArea}
        onChange={handleChange}
        name="description"
      />
    </Box>
  );
};

export default Create;
