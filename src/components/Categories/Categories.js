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
import { useHistory } from "react-router";
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
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((item, id) => {
            return (
              <TableRow key={id}>
                <TableCell>{item}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
