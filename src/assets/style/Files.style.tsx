import styled, { css, keyframes } from "styled-components";

import { flexMixin } from "./GlobalStyles";

type BtnContainer = {
  iconName: string;
};

type FileLoaderProps = {
  top: number;
  left: number;
  isTime?: boolean;
};

export const ControlBtnsContainer = styled.div<BtnContainer>`
  margin-top: ${({ iconName }) =>
    iconName === "recycle" ? "6px" : iconName === "work" ? "5px" : "3px"};
  ${flexMixin({ justify: "center", align: "center" })};

  margin-top: ${({ iconName }) =>
    iconName === "recycle" || iconName === "work" ? "5px" : "3px"};

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

  height: 22px;
  width: 25px;
  margin-left: 0.5rem;
  cursor: pointer;

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

    & img {
      transform: translate(1px, 1px);
    }
  }

  img {
    user-select: none;
    user-drag: none;
  }
`;

export const ControlButton = styled.button<BtnContainer>`
  ${controlButtonStyles};
  height: ${({ iconName }) => iconName === "work" && "20px"};
`;

export const MinimizeBtn = styled.button<BtnContainer>`
  ${controlButtonStyles};
  justify-content: flex-start !important;
  align-items: flex-end !important;

  height: ${({ iconName }) => iconName === "work" && "20px"};

  img {
    margin: 0.2rem;
  }
`;

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FileLoader = styled.div<FileLoaderProps>`
  height: 200px;
  width: 500px;

  position: absolute;
  top: ${({ top }) => top + "%"};
  left: ${({ left }) => left + "%"};

  transform: translate(-50%, -50%);
  z-index: ${({ isTime }) => isTime && "4"};

  img {
    animation: ${({ isTime }) =>
      isTime &&
      css`
        ${rotating} 2s linear infinite
      `};
    height: 30px;

    user-select: none;
    pointer-events: none;
    -webkit-user-drag: none;
  }
`;
