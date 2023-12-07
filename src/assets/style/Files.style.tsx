import styled from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import cancelClicked from "../images/buttons/cancleClicked.jpg";
import close from "../images/buttons/close.png";
import clicked from "../images/buttons/closeClicked.png";
import maximize from "../images/buttons/maximize.jpg";
import maximizeClicked from "../images/buttons/maximizeClicked.png";
import minimize from "../images/buttons/minimize.jpg";
import minimizeClicked from "../images/buttons/minimizeClicked.png";
import okBtn from "../images/buttons/okBtn.jpg";
import okBtnClicked from "../images/buttons/okBtnClicked.jpg";

type ControlBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
  isClicked?: boolean;
};

type OkBtnProps = {
  isClicked: boolean;
};

export const MinimizeBtn = styled.button<ControlBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${minimizeClicked}) center/contain no-repeat`
      : `url(${minimize}) center/contain no-repeat`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
  transition: background 200ms ease;
  transition: background 200ms ease;
`;

export const MaximizeBtn = styled.button<ControlBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${maximizeClicked}) center/contain no-repeat`
      : `url(${maximize}) center/contain no-repeat`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
  transition: background 200ms ease;
`;

export const CloseBtn = styled.button<ControlBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${clicked}) center/cover no-repeat`
      : `url(${close}) center/contain no-repeat`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
  transition: background 200ms ease;
`;

export const OkButton = styled.button<OkBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${okBtnClicked}) center/contain no-repeat`
      : `url(${okBtn}) center/contain no-repeat`};
  height: 33px;
  width: 107px;
  position: absolute;
  bottom: 0.9rem;
  right: 15.25rem;
  cursor: pointer;
`;

export const CancelBtn = styled.button<OkBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${cancelClicked}) center/contain no-repeat`
      : `url(${cancel}) center/contain no-repeat`};
  height: 33px;
  width: 107px;
  position: absolute;
  bottom: 0.9rem;
  right: 8rem;
  cursor: pointer;
`;
