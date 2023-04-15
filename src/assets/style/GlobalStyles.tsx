import React from "react";
import { createGlobalStyle, css } from "styled-components";

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

    body {
      background-color: #008080;
      overflow: hidden;
    }
  `}`
);
