import styled from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import cancelClicked from "../images/buttons/cancelClicked.jpg";
import close from "../images/buttons/close.png";
import closeClicked from "../images/buttons/closeClicked.jpg";
import maximize from "../images/buttons/maximize.jpg";
import maximizeClicked from "../images/buttons/maximizeClicked.jpg";
import minimize from "../images/buttons/minimize.jpg";
import minimizeClicked from "../images/buttons/minimizeClicked.jpg";
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
      ? `url(${minimizeClicked}) center/cover no-repeat`
      : `url(${minimize}) center/cover no-repeat`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
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
`;

export const CloseBtn = styled.button<ControlBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${closeClicked}) center/contain no-repeat`
      : `url(${close}) center/contain no-repeat`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
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
