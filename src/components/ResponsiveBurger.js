import React, { useState, useEffect } from "react";

// React hamburger menu. Yum
import { slide as Menu } from "react-burger-menu";

// Bootstrap
import Nav from "react-bootstrap/Nav";

function ResponsiveBurger() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakPoint) {
    return (
      <div>
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
      </div>
    );
  } else {
    return (
      <Menu right width={"210px"} noOverlay>
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
}
export default ResponsiveBurger;
