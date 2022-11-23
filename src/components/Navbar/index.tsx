import React from "react";
import styled from "styled-components";
// import logo from '../static/icons/planetomantics_logo.svg'
// import { ReactComponent as Logo } from "../static/icons/planetomantics_logo.svg";

const NavbarWrapper = styled.div`
  background-color: #2f2f2f;
  color: white;
  padding: 3vh;
  height: 100px;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0vh 3vw 0vh 1vw;
`;

const Slogan = styled.h3`
  margin: 0vh 3vw 0vh 3vw;
  font-style:italic;
  font-weight: thin;
`;

const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 50px;
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoSection>
        <Logo>PLANETOMANTICS</Logo>
        <VerticalLine/>
        {/* <Logo/> */}
        {/* <img src={logo} /> */}
        <Slogan>MANIACALLY TAKING TECH TO THE PLANET</Slogan>
      </LogoSection>
    </NavbarWrapper>
  );
};
