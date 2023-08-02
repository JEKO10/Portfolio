import styled from "styled-components";

import clicked from "../images/clicked.png";
import name from "../images/name.png";
import startButton from "../images/start.png";
import taskbar from "../images/taskbar.jpg";
import { flexMixin } from "./GlobalStyles";

type ButtonProps = {
  isClicked: boolean;
};

export const TaskBar = styled.section`
  background-image: url(${taskbar});
  ${flexMixin({ justify: "space-between", align: "flex-end" })}
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  padding: 0 10px;
  z-index: 10;
`;

export const Start = styled.button<ButtonProps>`
  height: 35px;
  width: 82px;
  background: ${({ isClicked }) =>
    isClicked
      ? `
     url(${clicked})
  `
      : `url(${startButton})`};
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const Name = styled.button`
  height: 35px;
  width: 163px;
  background: url(${name});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const Dash = styled.img`
  height: 35px;
  margin: 0 5px;
  user-select: none;
`;
