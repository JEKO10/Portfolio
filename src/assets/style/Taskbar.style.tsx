import styled from "styled-components";

import book from "../images/buttons/bookTaskbar.jpg";
import contact from "../images/buttons/contactTaskbar.png";
import contactClicked from "../images/buttons/contactTaskbarClicked.jpg";
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

  article {
    ${flexMixin({ justify: "center", align: "center" })};
    margin-bottom: 3px;
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

export const Name = styled.div<ButtonProps>`
  /* background-color: #c0c0c0;
  height: 35px;
  width: 163px;
  margin-right: 5px;
  cursor: pointer; */
  background-color: #c0c0c0;
  ${flexMixin({ justify: "flex-start", align: "center" })};
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: 28px;
  margin: 0 15px 0 5px;
  cursor: pointer;

  img {
    scale: 0.8;
    transform: ${({ isClicked }) =>
      isClicked ? "translate(-9px, 1px)" : "translate(-10px, 0)"};
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

export const About = styled.div<ButtonProps>`
  background-color: #c0c0c0;
  ${flexMixin({ justify: "flex-start", align: "center" })};
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  width: 163px;
  margin-right: 5px;
  cursor: pointer;

  img {
    scale: 0.8;
    transform: ${({ isClicked }) =>
      isClicked ? "translate(-9px, 1px)" : "translate(-10px, 0)"};
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
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
