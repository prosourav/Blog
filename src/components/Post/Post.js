import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  container: {
    height: 350,
    margin: 10,
    border: "1px solid #d3cede",
    borderRadius: 10,
    "& > *": {
      padding: "0 5px 5px 5px",
    },
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10 10 0 0",
  },
  text: {
    fontSize: 12,
    color: "#878787",
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
    textAlign: "center",
  },
});

const Post = ({ posts }) => {
  const classes = useStyle();
  const history = useHistory();
  const url =
    posts.picture ||
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Box
      className={classes.container}
      onClick={() => history.push(`/details/${posts._id}`)}
    >
      <img src={url} alt="Loading..." className={classes.image} />
      <Typography className={classes.text}>{posts.categories}</Typography>
      <Typography className={classes.heading}>
        {addEllipsis(posts.title, 20)}
      </Typography>
      <Typography className={classes.text}>Author:{posts.username}</Typography>
      <Typography className={classes.detail}>
        {addEllipsis(posts.description, 100)}
      </Typography>
    </Box>
  );
};

export default Post;
