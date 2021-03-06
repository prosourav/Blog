import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useOktaAuth } from "@okta/okta-react";
import React from "react";

import { useHistory } from "react-router-dom";

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
  button: {
    background: "unset",
    textTransform: "uppercase",
    border: "none",
    fontFamily: "Roboto",
    fontSize: 17,
    cursor: "pointer",
  },
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");
  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout} className={classes.button}>
      Logout
    </button>
  ) : (
    <button onClick={login}>Login</button>
  );

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
          {button}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
