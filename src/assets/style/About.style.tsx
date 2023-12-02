import styled from "styled-components";

import aboutHandle from "../images/handles/aboutHandle.jpg";
import aboutModal from "../images/modals/aboutModal.png";
import scroll from "../images/other/scroll.jpg";
import scrollArrowDown from "../images/other/scrollArrowDown.jpg";
import scrollArrowUp from "../images/other/scrollArrowUp.jpg";
import scrollHandle from "../images/other/scrollHandle.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/contain no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;
  overflow: hidden;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};

  /*resize: both;
  overflow: auto; */
`;

export const AboutHandle = styled.div<FilesProps>`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 50px;
  width: 100%;
  max-width: 975px;
  margin: 0 auto;
  cursor: grab;
`;

export const AboutMeText = styled.article`
  position: absolute;
  left: 25px;
  top: 95px;
  max-height: 515px;
  overflow: auto;

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 0.8rem;
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 58px;
  }

  ::-webkit-scrollbar-track {
    background: url(${scroll}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-thumb {
    background: url(${scrollHandle}) center/contain no-repeat;
    cursor: pointer;
  }

  ::-webkit-scrollbar-button:single-button {
    display: block;
    height: 35px;
    width: 37px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${scrollArrowUp}) center/contain no-repeat;
    cursor: pointer;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${scrollArrowDown}) center/contain no-repeat;
    cursor: pointer;
  }
`;
