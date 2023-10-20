import styled from "styled-components";

import aboutHandle from "../images/handles/aboutHandle.jpg";
import aboutModal from "../images/modals/aboutModal.png";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const AboutFile = styled.section<FilesProps>`
  background: ${({ isVisible }) =>
    isVisible ? `url(${aboutModal}) center/contain no-repeat` : "none"};
  position: absolute;
  height: 652px;
  width: 975px;

  > *:not(.handle) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};

  /*resize: both;
  overflow: auto; */
`;

export const AboutHandle = styled.div<FilesProps>`
  background: url(${aboutHandle}) left/cover no-repeat;
  height: 50px;
  width: ${({ isVisible }) => (isVisible ? "100%" : "17%")};

  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 0)" : "translate(0, 2000%)"};
  transition: transform 200ms linear, width 100ms linear;
`;

export const AboutMeText = styled.p`
  position: absolute;
  top: 95px;
  left: 25px;
  font-size: 2rem;
  line-height: 50px;
  font-weight: 500;
  padding-right: 80px;
  pointer-events: none;
`;
