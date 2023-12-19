import styled from "styled-components";

import aboutMe from "../images/buttons/aboutTaskbar.png";
import aboutMeClicked from "../images/buttons/aboutTaskbarClicked.jpg";
import book from "../images/buttons/bookTaskbar.jpg";
import contact from "../images/buttons/contactTaskbar.png";
import contactClicked from "../images/buttons/contactTaskbarClicked.jpg";
import name from "../images/buttons/name.png";
import nameClicked from "../images/buttons/nameClicked.jpg";
import recycleClicked from "../images/buttons/recycleClicked.jpg";
import recycle from "../images/buttons/recycleTaskbar.png";
import startButton from "../images/buttons/start.png";
import startClicked from "../images/buttons/startClicked.png";
import work from "../images/buttons/workTaskbar.jpg";
import workClicked from "../images/buttons/workTaskbarClicked.jpg";
import taskbar from "../images/other/taskbar.jpg";
import { flexMixin } from "./GlobalStyles";

type ButtonProps = {
  isOpen?: boolean;
  isClicked?: boolean;
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

export const Name = styled.button<ButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${nameClicked}) center/contain no-repeat`
      : `url(${name}) center/contain no-repeat`};
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const About = styled.button<ButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${aboutMeClicked}) center/contain no-repeat`
      : `url(${aboutMe}) center/contain no-repeat`};
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Work = styled.button<ButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${workClicked}) center/contain no-repeat`
      : `url(${work}) center/contain no-repeat`};
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Contact = styled.button<ButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${contactClicked}) center/contain no-repeat`
      : `url(${contact}) center/contain no-repeat`};
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Book = styled.button<ButtonProps>`
  background: url(${book}) center/contain no-repeat;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Recycle = styled.button<ButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${recycleClicked}) center/contain no-repeat`
      : `url(${recycle}) center/contain no-repeat`};
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
