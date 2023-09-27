import styled, { css } from "styled-components";

import cancel from "../images/buttons/cancel.jpg";
import close from "../images/buttons/close.png";
import minimize from "../images/buttons/minimize.jpg";
import okBtn from "../images/buttons/okBtn.jpg";
import aboutHandle from "../images/handles/aboutHandle.jpg";
import contactHandle from "../images/handles/contactHandle.jpg";
import recycleHandle from "../images/handles/recycleHandle.jpg";
import timeHandle from "../images/handles/timeHandle.jpg";
import workHandle from "../images/handles/workHandle.jpg";
import aboutModal from "../images/modals/aboutModal.png";
import book from "../images/modals/bookModal.jpg";
import contactModal from "../images/modals/contactModal.jpg";
import recycleBin from "../images/modals/recycleBin.png";
import time from "../images/modals/timeModal.jpg";
import workModal from "../images/modals/workModal.jpg";

type ControlBtnProps = {
  height: number;
  width: number;
  top: number;
  right: number;
};

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

type BookProps = {
  iconName: string;
  clickedIcon: string;
  isClicked: boolean;
};

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/cover no-repeat;
  position: relative;
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

export const ContactHandle = styled.div`
  background: url(${contactHandle}) center/cover no-repeat;
  height: 57px;
  width: 100%;
`;

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/cover no-repeat;
  position: absolute;
  height: 759px;
  width: 878px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.div`
  background: url(${workHandle}) center/cover no-repeat;
  height: 48px;
  width: 100%;
`;

export const TimeModal = styled.section<FilesProps>`
  background: url(${time}) center/cover no-repeat;
  position: relative;
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

export const BookFile = styled.section<FilesProps>`
  background: url(${book}) center/cover no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;
  z-index: ${({ lastClicked }) => (lastClicked === "book" ? 2 : 1)};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const Book = styled.button<BookProps>`
  height: 126px;
  width: 100px;
  position: absolute;
  top: 16.4rem;
  left: 17.7rem;
  ${({ isClicked, iconName, clickedIcon }) =>
    isClicked
      ? css`
          background: url(${clickedIcon}) center/contain no-repeat;
        `
      : css`
          background: url(${iconName}) center/contain no-repeat;
        `};
  cursor: pointer;
`;

export const MinimizeBtn = styled.button<ControlBtnProps>`
  background: url(${minimize}) center/contain no-repeat;
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
