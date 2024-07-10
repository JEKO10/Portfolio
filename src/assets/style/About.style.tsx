import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import aboutModal from "../images/modals/shared.jpg";
import aboutHandle from "../images/other/handle.jpg";
import scroll from "../images/other/scroll.jpg";
import scrollArrowDown from "../images/other/scrollArrowDown.jpg";
import scrollArrowUp from "../images/other/scrollArrowUp.jpg";
import scrollHandle from "../images/other/scrollHandle.jpg";
import { desktopL, disableUserShared, flexMixin } from "./GlobalStyles";

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  @media ${desktopL} {
    height: 500px;
    width: 747px;
  }

  overflow: hidden;
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};

  /*resize: both;
  overflow: auto; */

  > div {
    @media ${desktopL} {
      height: 40px;
      width: 110px;

      button {
        height: 19px;
        width: 22px;

        img {
          scale: 0.9;
        }
      }
    }
  }
`;

export const AboutHandle = styled.article<FilesProps>`
  background: url(${aboutHandle}) center/cover no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  @media ${desktopL} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 37px;
    width: 165px;

    @media ${desktopL} {
      height: 29px;
    }

    ${disableUserShared}
    cursor: auto;

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;
      image-rendering: pixelated;

      ${disableUserShared}

      @media ${desktopL} {
        height: 25px;
        width: 25px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      @media ${desktopL} {
        font-size: 1.5rem;
      }
    }
  }
`;

export const AboutMeText = styled.article`
  position: absolute;
  top: 88px;
  left: 25px;
  padding-top: 5px;
  max-height: 550px;
  overflow: auto;

  @media ${desktopL} {
    top: 80px;
    max-height: 400px;
    padding-top: 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 1.2rem;
    ${disableUserShared}
    pointer-events: none;

    @media ${desktopL} {
      font-size: 1.3rem;
      line-height: 30px;
      margin-bottom: 1rem;
      padding-right: 30px;
    }
  }

  ::-webkit-scrollbar {
    width: 62px;

    @media ${desktopL} {
      display: none;
    }
  }

  ::-webkit-scrollbar-track {
    background: url(${scroll}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-thumb {
    background: url(${scrollHandle}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button {
    display: block;
    height: 39px;
    width: 37px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${scrollArrowUp}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${scrollArrowDown}) center/contain no-repeat;
  }
`;
