import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Peruvian</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default NavBar;
