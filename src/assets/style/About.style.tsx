import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import aboutHandle from "../images/other/handle.jpg";
import aboutModal from "../images/modals/shared.jpg";
import scroll from "../images/other/scroll.jpg";
import scrollArrowDown from "../images/other/scrollArrowDown.jpg";
import scrollArrowUp from "../images/other/scrollArrowUp.jpg";
import scrollHandle from "../images/other/scrollHandle.jpg";
import { disableUserShared, flexMixin } from "./GlobalStyles";

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/contain no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;

  overflow: hidden;
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};

  /*resize: both;
  overflow: auto; */
`;

export const AboutHandle = styled.article<FilesProps>`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 37px;
  width: 959px;
  max-width: 975px;
  margin: 0.5rem auto;
  cursor: grab;

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 37px;
    width: 165px;

    ${disableUserShared}
    cursor: auto;

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;

      ${disableUserShared}
    }

    p {
      font-size: 1.875rem;
      color: #fff;
    }
  }
`;

export const AboutMeText = styled.article`
  position: absolute;
  left: 25px;
  top: 88px;
  padding-top: 5px;
  max-height: 520px;
  overflow: auto;

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 0.8rem;

    ${disableUserShared}
    pointer-events: none;
  }

  ::-webkit-scrollbar {
    width: 59px;
  }

  ::-webkit-scrollbar-track {
    background: url(${scroll}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-thumb {
    background: url(${scrollHandle}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button {
    display: block;
    height: 35px;
    width: 37px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${scrollArrowUp}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${scrollArrowDown}) center/contain no-repeat;
  }
`;
