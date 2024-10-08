import styled from "styled-components";

import startButton from "../images/buttons/start.png";
import startClicked from "../images/buttons/startClicked.png";
import taskbar from "../images/other/taskbar.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  mobile,
  tablet,
} from "./GlobalStyles";

type ButtonProps = {
  isOpen?: boolean;
  iconName?: string;
};

type DashProps = {
  place: string;
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

  ${mobile} {
    padding-left: 5px;
  }

  article {
    ${flexMixin({ justify: "center", align: "center" })};
    margin-bottom: 3px;
  }

  img {
    ${disableUserShared}
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
  cursor: auto;

  ${tablet} {
    width: 40px;
  }

  ${mobile} {
    width: 20px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:not(:first-of-type) {
    ${desktopL} {
      width: 85px;
    }

    ${laptop} {
      width: 40px;
    }

    ${mobile} {
      width: 20px;
    }
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

    & img {
      transform: translate(-9px, 1px);
    }

    & p {
      transform: ${({ iconName }) =>
        iconName === "name" ? "translate(2px, 1px)" : "translate(-4px, 3px)"};
    }
  }

  img {
    height: 31px;
    width: 31px;
    margin-left: 10px;
    scale: 0.8;
    transform: translate(-10px, 0);

    ${mobile} {
      scale: 0.6;
      margin-left: 0;
    }
  }

  p {
    font-size: 1.5rem;
    margin-left: 0.2rem;
    transform: ${({ iconName }) =>
      iconName === "name" ? "" : "translate(-5px, 2px)"};
    cursor: auto;

    ${disableUserShared}
  }
`;

export const Dash = styled.img<DashProps>`
  height: 35px;
  margin: 0 5px;

  ${tablet} {
    ${({ place }) => place === "task" && "margin-right: 0.7rem"}
  }

  ${mobile} {
    margin: 0 2px;
    ${({ place }) => place === "task" && "margin-right: 0.5rem"};
  }
`;
