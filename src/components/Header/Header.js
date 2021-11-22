import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

import { useHistory } from "react-router";

const useStyles = makeStyles({
  component: {
    background: "white",
    color: "black",
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    cursor: "pointer",
  },
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.component}>
        <Typography className={classes.link} onClick={() => history.push("/")}>
          HOME
        </Typography>
        <Typography
          className={classes.link}
          onClick={() => history.push("/about")}
        >
          ABOUT
        </Typography>
        <Typography
          className={classes.link}
          onClick={() => history.push("/contact")}
        >
          CONTACT
        </Typography>
        <Typography
          className={classes.link}
          onClick={() => history.push("/login")}
        >
          LOGIN
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
