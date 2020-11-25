import React, { Component } from "react";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    width: "100vh"
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <NavBar />
    </div>
  );
}
