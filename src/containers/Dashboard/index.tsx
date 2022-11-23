import React from "react";
import styled from "styled-components";
import { RoundedButton } from "../../components/Navbar/RoundedButton";

const DashboardWrapper = styled.div`
  background: #1b2783;
  background: -webkit-linear-gradient(91deg, #1b2783 0%, #587295 100%);
  background: linear-gradient(91deg, #1b2783 0%, #587295 100%);
  margin: auto;
  position: fixed;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;

const HalfSection = styled.div`
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dashboard = () => {
  const buttonTitles = {
    button1: "View Speakers",
    button2: "View Sessions",
    button3: "About us",
  };
  return (
    <DashboardWrapper>
      <HalfSection>
        <ButtonWrapper>
          <RoundedButton title={buttonTitles.button1} />
          <RoundedButton title={buttonTitles.button2} />
          <RoundedButton title={buttonTitles.button3} />
        </ButtonWrapper>
      </HalfSection>
      <HalfSection />
    </DashboardWrapper>
  );
};
