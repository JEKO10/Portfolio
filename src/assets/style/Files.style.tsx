import styled from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import close from "../images/buttons/close.png";
import maximize from "../images/buttons/maximize.jpg";
import minimize from "../images/buttons/minimize.jpg";
import okBtn from "../images/buttons/okBtn.jpg";

type ControlBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
};

export const MinimizeBtn = styled.button<ControlBtnProps>`
  background: url(${minimize}) center/contain no-repeat;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;

export const MaximizeBtn = styled.button<ControlBtnProps>`
  background: url(${maximize}) center/contain no-repeat;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;

export const CloseBtn = styled.button<ControlBtnProps>`
  background: url(${close}) center/contain no-repeat;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;

export const OkButton = styled.button`
  background: url(${okBtn}) center/contain no-repeat;
  height: 33px;
  width: 107px;
  position: absolute;
  bottom: 0.9rem;
  right: 15.25rem;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  background: url(${cancel}) center/contain no-repeat;
  height: 33px;
  width: 107px;
  position: absolute;
  bottom: 0.9rem;
  right: 8rem;
  cursor: pointer;
`;
