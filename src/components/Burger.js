import React from "react";

// React hamburger menu. Yum
import { slide as Menu } from "react-burger-menu";

// Bootstrap
import Nav from "react-bootstrap/Nav";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

function Burger() {
  return (
    <Menu styles={styles}>
      <Nav.Link
        href="https://github.com/peterapplies"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>GitHub</div>
      </Nav.Link>
      <Nav.Link
        href="https://www.notion.so/Peter-Yoon-063211161c1c4390b06809f01d4463fc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Requirements</div>
      </Nav.Link>
      <Nav.Link
        href="https://www.notion.so/Setting-up-CodeSandbox-18b34f9c8192459d8f95bd20a00bc48e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Set Up</div>
      </Nav.Link>
    </Menu>
  );
}
export default Burger;
