import React from "react";
import { Dashboard } from "../Dashboard";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height:60%;
  width:100%;
`

export const Content = () => {
  return (
    <ContentWrapper>
      <Dashboard/>
    </ContentWrapper>
  );
};
