import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../service/api";
import Post from "./Post";

const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPost(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {posts.map((posts) => {
        return (
          <Grid item lg={3} sm={4} xs={12} key={posts._id}>
            <Post posts={posts} />
          </Grid>
        );
      })}
    </>
  );
};

export default Posts;
