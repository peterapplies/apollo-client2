import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    width: "300px"
  }
});

export default function Link(props) {
  const classes = useStyles();
  return (
    <ListItem className={classes.link}>
      {props.link.slug}
      <br />
      {props.link.description}
      <br />
      {props.link.link}
    </ListItem>
  );
}
