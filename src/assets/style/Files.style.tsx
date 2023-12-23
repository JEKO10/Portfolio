import styled from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import cancelClicked from "../images/buttons/cancelClicked.jpg";
import okBtn from "../images/buttons/okBtn.jpg";
import okBtnClicked from "../images/buttons/okBtnClicked.jpg";
import { flexMixin } from "./GlobalStyles";

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
  ${flexMixin({ justify: "flex-start", align: "flex-end" })};
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  cursor: pointer;

  img {
    margin: 0.2rem;
    transform: ${({ isClicked }) => (isClicked ? "translate(1px, 1px)" : "")};
    pointer-events: none;
  }
`;

export const MaximizeBtn = styled.button<ControlBtnProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  cursor: pointer;

  img {
    transform: ${({ isClicked }) => (isClicked ? "translate(1px, 1px)" : "")};
    pointer-events: none;
  }
`;

export const CloseBtn = styled.button<ControlBtnProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  cursor: pointer;

  img {
    transform: ${({ isClicked }) => (isClicked ? "translate(1px, 1px)" : "")};
    pointer-events: none;
  }
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
