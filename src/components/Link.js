import React from "react";
import ListItem from "@material-ui/core/ListItem";

export default function Link(props) {
  return (
    <ListItem>
      {props.link.slug}
      <br />
      {props.link.description}
      <br />
      {props.link.link}
    </ListItem>
  );
}
