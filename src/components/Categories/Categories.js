import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { category } from "../../constants/data";

const useStyle = makeStyles({
  create: {
    margin: 20,
    color: "#fff",
    background: "#6495ED",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = () => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <>
      <Button
        variant="contained"
        className={classes.create}
        onClick={() => history.push("/create")}
      >
        Create Blog
      </Button>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={"/"} className={classes.link}>
                All Categories{" "}
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((item, id) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link to={`/?categories=${item}`} className={classes.link}>
                    {item}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
