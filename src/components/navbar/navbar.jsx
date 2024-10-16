import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavList ,StyledNavLink } from "./style";

export default function Navbar() {
  return (
    <Nav>
      <h2>Store</h2>
      <NavList>
        <StyledNavLink  to={"/home"}>Home</StyledNavLink>
        <StyledNavLink to={"/cart"}>Cart</StyledNavLink>
      </NavList>
    </Nav>
  );
}
