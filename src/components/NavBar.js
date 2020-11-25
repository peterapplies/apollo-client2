import React from "react";
import Burger from "./Burger";

// Material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    position: "fixed"
  },
  link: {
    color: "#000000"
  }
});

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" width={1}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="subtitle1">Sh.ink</Typography>
          {/* <Burger /> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
export default NavBar;
