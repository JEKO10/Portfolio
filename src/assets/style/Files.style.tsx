import styled from "styled-components";

import aboutModal from "../images/aboutModal.png";
import close from "../images/close.png";
import time from "../images/timeModal.png";

type CloseBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
};

export const AboutFile = styled.section`
  background: url(${aboutModal}) center/cover no-repeat;
  position: relative;
  height: 652px;
  width: 975px;
`;

export const ContactFile = styled.section``;

export const WorkFile = styled.section``;

export const TimeModal = styled.section`
  background: url(${time}) center/cover no-repeat;
  position: relative;
  height: 486px;
  width: 576px;
`;

export const RecycleBinFile = styled.section``;

export const CloseBtn = styled.button<CloseBtnProps>`
  background: url(${close}) center/contain no-repeat;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;
