import styled from "styled-components";

import aboutModal from "../images/aboutModal.png";
import close from "../images/close.png";
import recycleBin from "../images/recycleBin.png";
import time from "../images/timeModal.png";

type CloseBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
};

type FilesProps = {
  lastClicked: string;
};

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/cover no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
`;

export const ContactFile = styled.section``;

export const WorkFile = styled.section``;

export const TimeModal = styled.section`
  background: url(${time}) center/cover no-repeat;
  position: absolute;
  height: 486px;
  width: 576px;
`;

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/cover no-repeat;
  position: absolute;
  height: 681px;
  width: 787px;
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
`;

export const CloseBtn = styled.button<CloseBtnProps>`
  background: url(${close}) center/contain no-repeat;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: ${({ top }) => top + "rem"};
  right: ${({ right }) => right + "rem"};
  cursor: pointer;
`;
