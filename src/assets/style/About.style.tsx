import styled from "styled-components";

import aboutHandle from "../images/handles/aboutHandle.jpg";
import aboutModal from "../images/modals/aboutModal.png";

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/contain no-repeat;
  position: absolute;
  width: 975px;

  height: ${({ isVisible }) => (isVisible ? "652px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
  top: ${({ isVisible }) => (isVisible ? "initial" : "155%")};
  right: ${({ isVisible }) => (isVisible ? "initial" : "40%")};

  transition: height 0.3s ease, opacity 0.3s ease, top 0.3s ease,
    right 0.3s ease;

  /* display: ${({ isVisible }) => (isVisible ? "block" : "none")};
   height: 652px; 
   resize: both;
  overflow: auto; */
`;

export const AboutHandle = styled.div`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 50px;
  width: 100%;
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
