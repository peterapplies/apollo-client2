import React from "react";

// @Material-ui
import Box from "@material-ui/core/Box";

export default function Link(props) {
  return (
    <Box>
      {props.link.slug}
      <br />
      {props.link.description}
      <br />
      {props.link.link}
    </Box>
  );
}
