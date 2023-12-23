import styled from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import cancelClicked from "../images/buttons/cancelClicked.jpg";
// import close from "../images/buttons/close.png";
// import maximize from "../images/buttons/maximize.png";
// import minimize from "../images/buttons/minimize.jpg";
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
  background: none;
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;

export const MaximizeBtn = styled.button<ControlBtnProps>`
  background: none;
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;

export const CloseBtn = styled.button<ControlBtnProps>`
  background: none;
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
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
  height: 35px;
  width: 108px;
  position: absolute;
  bottom: 0.8rem;
  right: 15.2rem;
  cursor: pointer;
`;

export const CancelBtn = styled.button<OkBtnProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${cancelClicked}) center/contain no-repeat`
      : `url(${cancel}) center/contain no-repeat`};
  height: 35px;
  width: 108px;
  position: absolute;
  bottom: 0.8rem;
  right: 8rem;
  cursor: pointer;
`;
