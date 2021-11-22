import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& :first-child": {
      fontSize: 66,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      backgroundColor: "#FFFFFF",
    },
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <Box className={classes.image}>
      <Typography>BLOG</Typography>
      <Typography>Code For Interview</Typography>
    </Box>
  );
};

export default Banner;
