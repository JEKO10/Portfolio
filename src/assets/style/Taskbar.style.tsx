import styled from "styled-components";

import startButton from "../images/buttons/start.png";
import startClicked from "../images/buttons/startClicked.png";
import taskbar from "../images/other/taskbar.jpg";
import { flexMixin } from "./GlobalStyles";

type ButtonProps = {
  isOpen?: boolean;
  iconName?: string;
};

export const TaskBar = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-end" })}
  background-image: url(${taskbar});
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  padding: 0 10px;
  z-index: 3;

  article {
    ${flexMixin({ justify: "center", align: "center" })};
    margin-bottom: 3px;
  }

  img {
    user-select: none;
    user-drag: none;
  }
`;

export const Start = styled.button<ButtonProps>`
  height: 35px;
  width: 82px;
  background: ${({ isOpen }) =>
    isOpen
      ? `
     url(${startClicked})
  `
      : `url(${startButton})`};
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const TaskbarButton = styled.div<ButtonProps>`
  ${flexMixin({ justify: "flex-start", align: "center" })};
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

  height: 28px;
  width: 163px;
  margin: ${({ iconName }) => (iconName === "name" ? "0 15px 0 5px" : "")};
  margin-right: 15px;
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
      transform: translate(-9px, 1px);
    }
  }

  img {
    transform: translate(-10px, 0);
    scale: 0.8;
    margin-left: ${({ iconName }) => (iconName === "book" ? "-5px" : "")};
  }
`;

export const Dash = styled.img`
  height: 35px;
  margin: 0 5px;
`;
