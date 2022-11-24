import React from "react";
import styled from "styled-components";

interface Props {
    title: string
}

export const RoundedButton = ({title} : Props) => {
  const Button = styled.div`
    background-color: #19173d;
    border: 2px solid white;
    border-radius: 5vh;
    padding: 1vh 1vw 1vh 1vw;
    color: #7976cd;
    margin:2vh;
    cursor: pointer;
    &:hover{
        background-color: #45427b;
    }
  `;

  return (
    <Button>
      <h4>{title}</h4>
    </Button>
  );
};
