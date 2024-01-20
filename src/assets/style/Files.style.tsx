import styled, { css } from "styled-components";

import { flexMixin } from "./GlobalStyles";

type BtnContainer = {
  iconName: string;
};

export const ControlBtnsContainer = styled.div<BtnContainer>`
  ${flexMixin({ justify: "center", align: "center" })};

  margin-top: ${({ iconName }) =>
    iconName === "recycle" || iconName === "work" ? "5.5px" : "3px"};

  > div {
    ${flexMixin({ justify: "center", align: "center" })};

    button {
      margin: 0 0.3rem;
    }
  }
`;

const controlButtonStyles = css`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: #c0c0c0;
  box-shadow: -2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white,
    -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,
    2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black,
    4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;

  height: 22px;
  width: 25px;
  margin-left: 0.5rem;
  cursor: pointer;

  &:active {
    box-shadow: -2px -2px #818181, -2px 0 #818181, 0 -2px #818181,
      -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede,
      0 2px #e0dede, 2px 0 #e0dede, 2px -2px #818181, -2px 2px #e0dede,
      -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white,
      2px -4px black, 4px -4px white;

    & img {
      transform: translate(1px, 1px);
    }
  }

  img {
    user-select: none;
    user-drag: none;
  }
`;

export const ControlButton = styled.button`
  ${controlButtonStyles};
`;

export const MinimizeBtn = styled.button`
  ${controlButtonStyles};
  justify-content: flex-start !important;
  align-items: flex-end !important;

  img {
    margin: 0.2rem;
  }
`;
