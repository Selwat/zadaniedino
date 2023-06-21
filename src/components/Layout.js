import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import "./stylesComponents.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar className="navbar">
        <Nav>
          <Nav.Item icon={<HomeIcon />}>
            <Link to="/"> Strona główna</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
