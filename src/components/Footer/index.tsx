import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #e6f0fd;
  width: 100%;
  height: 20%;
  margin: 0;
`;

const FooterLogo = styled.h3`
  margin: 0vh;
  padding:2vh;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>This is the footer</FooterLogo>
    </FooterWrapper>
  );
};
