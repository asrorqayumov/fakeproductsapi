import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

export const NavList = styled.div`
  display: flex;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 17px;
  margin-left: 15px;

  &.active {
    color: gray;
  }

  &:hover {
    color: gray;
  }
`;
