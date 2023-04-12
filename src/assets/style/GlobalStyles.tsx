import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      text-align: center;
      font-family: "Roboto", sans-serif;
    }
  `}`
);

export const HomePage = styled.section`
  padding: 20px;

  * {
    padding: 30px 0;
  }
`;
