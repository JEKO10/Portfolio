import styled from "styled-components";

import clicked from "../images/clicked.png";
import startButton from "../images/start.png";
import taskbar from "../images/taskbar.jpg";

type ButtonProps = {
  isClicked: boolean;
};

export const TaskBar = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
  height: 45px;
  width: 100%;
  background-image: url(${taskbar});
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
  background-size: cover;
  cursor: pointer;
`;

export const Dash = styled.img`
  height: 35px;
  margin-left: 5px;
`;
