import { Box, Button, TextareaAutosize, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Context/ContextProvider";
import { getComments, newComment } from "../../service/api";
import Comment from "./Comment";

const useStyle = makeStyles({
  component: {
    marginTop: 100,
    display: "flex",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: "50%",
  },
  textArea: {
    width: "100%",
    margin: "0 20px",
  },
  button: {
    height: 40,
  },
});

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const classes = useStyle();
  const [comment, setComment] = useState(initialValue);
  const [allComments, setAllComments] = useState([]);
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const url = "https://static.thenounproject.com/png/12017-200.png";

  useEffect(() => {
    const getComment = async () => {
      const data = await getComments(post._id);
      setAllComments(data);
    };
    getComment();
  }, [post, toggle]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      comments: e.target.value,
      postId: post._id,
      name: account,
    });
    setData(e.target.value);
  };

  const postComment = async () => {
    await newComment(comment);
    setData("");
    setToggle((prev) => !prev);
  };

  return (
    <Box>
      <Box className={classes.component}>
        <img src={url} alt="dp" className={classes.image} />
        <TextareaAutosize
          minRows="5"
          className={classes.textArea}
          onChange={handleChange}
          value={data}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
          onClick={postComment}
        >
          Post
        </Button>
      </Box>
      {allComments &&
        allComments.map((data) => {
          return (
            <Comment comment={data} setToggle={setToggle} key={data._id} />
          );
        })}
    </Box>
  );
};

export default Comments;
