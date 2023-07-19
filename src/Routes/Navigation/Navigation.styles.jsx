import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  width : 30%
  padding: 25px;
  display: flex; /* Add this line to use flex layout for logo container */
  align-items: center; /* Align the logo vertically in the container */
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;