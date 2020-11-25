import React, { useState, useRef, useEffect } from "react";
import ResponsiveBurger from "./ResponsiveBurger";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  link: {
    color: "#000000"
  }
});

function NavBar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > window.innerHeight * 0.9;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div>
        <Navbar
          style={{
            backgroundColor: navBackground ? "#f0f0f0" : "transparent"
          }}
        >
          <Navbar.Brand>
            <Link className={classes.link} nderline="none" href="/">
              Sh.ink
            </Link>
          </Navbar.Brand>
          <ResponsiveBurger />
        </Navbar>
      </div>
    </section>
  );
}
export default NavBar;
