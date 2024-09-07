import styled from "styled-components";

import { flexMixin, mobile, tablet } from "./GlobalStyles";

export const ToolbarContainer = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};
  margin-bottom: 3px;
`;

export const ToolButton = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 28px;
  width: 163px;
  margin-left: 5px;
  padding: 0 10px 0 5px;

  ${tablet} {
    width: 65px;
    padding: 0;
    justify-content: center;
  }

  ${mobile} {
    width: 30px;
  }

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    & > * {
      transform: translate(1px, 1px);
    }
  }

  img {
    height: 25px;
    width: 60px;

    ${tablet} {
      display: none;
    }
  }
`;

export const Clock = styled.p`
  font-size: 1.4rem;
  user-select: none;

  ${mobile} {
    font-size: 1rem;
  }
`;
