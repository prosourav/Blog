import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LoginContext } from "../../Context/ContextProvider";
import { createPost, uploadFile } from "../../service/api";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
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
  username: "",
  categories: "Sports",
  createdDate: new Date(),
};

const Create = () => {
  const [post, setPost] = useState(initialValue);
  const [file, setFile] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const classes = useStyle();
  const history = useHistory();
  const { account, setAccount } = useContext(LoginContext);

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
    setPost({
      ...post,
      username: account,
      [e.target.name]: e.target.value,
    });
  }

  const savePost = async () => {
    await createPost(post);
    history.push("/");
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
