import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

interface IFlexMixin {
  justify:
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "stretch";
  align:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "self-start"
    | "self-end";
}

export const flexMixin = ({ justify, align }: IFlexMixin) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #008080;
      overflow: hidden;
      font-family: "w95fa", sans-serif;
      height: 155vh;
      width: 150vw;
    }
  `}`
);

export const HomePage = styled.section`
  height: 95vh;
  width: 100vw;
`;
