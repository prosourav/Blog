import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getPost, deleteItem } from "../../service/api";
import Comments from "../Comments/Comments";
import { LoginContext } from "../../Context/ContextProvider";

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
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const { account, setAccount } = useContext(LoginContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id);
      setData(response);
    };
    fetchData();
  }, []);

  const deletePost = async () => {
    await deleteItem(id);
    history.push(`/`);
  };

  const url =
    data.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      {account === data.username && (
        <Box className={classes.icons}>
          <Link to={`/update/${data._id}`}>
            {" "}
            <Edit className={classes.icon} color="primary" />{" "}
          </Link>
          <Delete className={classes.icon} color="error" onClick={deletePost} />
        </Box>
      )}
      <Typography className={classes.heading}>{data.title}</Typography>

      <Box className={classes.subheading}>
        <Typography>
          Author:
          <Link to={`/?userName=${data.username}`} className={classes.link}>
            <span style={{ fontWeight: 600 }}>{data.username}</span>
          </Link>
        </Typography>

        <Typography style={{ marginLeft: "auto" }}>
          {new Date(data.createdDate).toDateString()}
        </Typography>
      </Box>

      <Typography className={classes.detail}>{data.description}</Typography>
      <Comments post={data} />
    </Box>
  );
};

export default Details;
