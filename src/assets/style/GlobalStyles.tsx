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

export const primaryFont = "w95fa, sans-serif";

export const desktopL = `@media (max-width: 1440px)`;
export const laptop = `@media (max-width: 992px)`;
export const tablet = `@media (max-width: 768px)`;
export const mobile = `@media (max-width: 480px)`;

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
      font-family: ${primaryFont};
      height: 135vh;

      ${desktopL} {
        height: 110vh;
      }
    }
  `}`
);

export const HomePage = styled.section`
  height: 95vh;
  width: 100vw;
`;

export const disableUserShared = css`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  touch-action: none;
`;
