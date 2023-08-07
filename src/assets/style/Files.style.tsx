import styled from "styled-components";

import aboutHandle from "../../assets/images/aboutHandle.jpg";
import recycleHandle from "../../assets/images/recycleHandle.jpg";
import aboutModal from "../images/aboutModal.png";
import close from "../images/close.png";
import contactModal from "../images/contactModal.jpg";
import recycleBin from "../images/recycleBin.png";
import timeHandle from "../images/timeHandle.jpg";
import time from "../images/timeModal.png";
import workModal from "../images/workModal.jpg";

type CloseBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
};

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/cover no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
`;

export const AboutHandle = styled.div`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 50px;
  width: 100%;
`;

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/cover no-repeat;
  position: absolute;
  height: 620px;
  width: 998px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};
`;

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/cover no-repeat;
  position: absolute;
  height: 759px;
  width: 878.16px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const TimeModal = styled.section<FilesProps>`
  background: url(${time}) center/cover no-repeat;
  position: absolute;
  height: 486px;
  width: 576px;
  z-index: ${({ lastClicked }) => (lastClicked === "time" ? 2 : 1)};
`;

export const TimeHandle = styled.div`
  background: url(${timeHandle}) center/cover no-repeat;
  height: 38px;
  width: 576px;
`;

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/cover no-repeat;
  position: absolute;
  height: 681px;
  width: 787px;
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const RecycleBinHandle = styled.div`
  background: url(${recycleHandle}) center/cover no-repeat;
  height: 44px;
  width: 787px;
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
