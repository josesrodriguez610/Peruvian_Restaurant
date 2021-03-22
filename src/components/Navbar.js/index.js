import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Peruvian</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default NavBar;
