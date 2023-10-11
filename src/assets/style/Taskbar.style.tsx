import styled from "styled-components";

import aboutMe from "../images/buttons/aboutTaskbar.png";
import clicked from "../images/buttons/clicked.png";
import contact from "../images/buttons/contactTaskbar.png";
import name from "../images/buttons/name.png";
import recycle from "../images/buttons/recycleTaskbar.png";
import startButton from "../images/buttons/start.png";
import work from "../images/buttons/workTaskbar.png";
import taskbar from "../images/other/taskbar.jpg";
import { flexMixin } from "./GlobalStyles";

type ButtonProps = {
  isClicked: boolean | undefined;
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
  background: url(${name}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const About = styled.button`
  background: url(${aboutMe}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Recycle = styled.button`
  background: url(${recycle}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Work = styled.button`
  background: url(${work}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Contact = styled.button`
  background: url(${contact}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Dash = styled.img`
  height: 35px;
  margin: 0 5px;
  user-select: none;
`;
