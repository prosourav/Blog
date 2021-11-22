import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";

//components

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
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Details = () => {
  const classes = useStyle();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <div>
      <Box className={classes.container}>
        <img src={url} alt="post" className={classes.image} />

        <Box className={classes.icons}>
          <Link to="/update">
            {" "}
            <Edit className={classes.icon} color="primary" />{" "}
          </Link>
          <Delete className={classes.icon} color="error" />
        </Box>
        <Typography className={classes.heading}>Heading of the blog</Typography>

        <Box className={classes.subheading}>
          <Link className={classes.link}>
            <Typography>
              Author:{" "}
              <span style={{ fontWeight: 600 }}>Code for Interview</span>
            </Typography>
          </Link>
          <Typography style={{ marginLeft: "auto" }}>
            {new Date().toDateString()}
          </Typography>
        </Box>

        <Typography className={classes.detail}>Detail of Blog</Typography>
      </Box>
    </div>
  );
};

export default Details;
