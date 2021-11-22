import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React from "react";

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

const Update = () => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Loading..." />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase placeholder="title" className={classes.textField} />
        <Button variant="contained" color="primary">
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        rows={5}
        placeholder="tell your story...."
        className={classes.textArea}
      />
    </Box>
  );
};

export default Update;
