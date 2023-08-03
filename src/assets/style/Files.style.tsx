import styled from "styled-components";

import aboutHandle from "../../assets/images/aboutHandle.png";
import recycleHandle from "../../assets/images/recycleHandle.png";
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

export const AboutHandle = styled.div`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 40px;
  width: 961px;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
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

export const RecycleBinHandle = styled.div`
  background: url(${recycleHandle}) center/cover no-repeat;
  height: 36px;
  width: 774px;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
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
