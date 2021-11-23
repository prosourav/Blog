import { Grid } from "@material-ui/core";
import React from "react";
import Post from "./Post";

const Posts = () => {
  const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {post.map((id) => {
        return (
          <Grid item lg={3} sm={4} xs={12} key={id}>
            <Post />
          </Grid>
        );
      })}
    </>
  );
};

export default Posts;
