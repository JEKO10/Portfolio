import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import aboutModal from "../images/modals/shared.jpg";
import aboutModalSmall from "../images/modals/sharedSmall.jpg";
import aboutHandle from "../images/other/handle.jpg";
import scroll from "../images/other/scroll.jpg";
import scrollArrowDown from "../images/other/scrollArrowDown.jpg";
import scrollArrowUp from "../images/other/scrollArrowUp.jpg";
import scrollHandle from "../images/other/scrollHandle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  tablet,
} from "./GlobalStyles";

export const AboutFile = styled.section<FilesProps>`
  background: url(${aboutModal}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${desktopL} {
    height: 500px;
    width: 747px;
  }

  ${laptop} {
    height: 334px;
    width: 500px;
  }

  ${tablet} {
    background: url(${aboutModalSmall}) center/contain no-repeat;
    height: 200px;
    width: 300px;
    top: 10px;
    left: 100px;
  }

  overflow: hidden;
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};

  /*resize: both;
  overflow: auto; */

  > div {
    ${desktopL} {
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

    ${laptop} {
      height: 29.5px;
      width: 85px;

      button {
        height: 12px;
        width: 14px;

        img {
          scale: 0.6;
        }
      }
    }

    ${tablet} {
      height: 24px;

      button {
        height: 9px;
        width: 11px;

        img {
          scale: 0.5;
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

  ${desktopL} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  ${laptop} {
    height: 20px;
    width: 492px;
  }

  ${tablet} {
    height: 18px;
    width: 282px;
    margin: 0.15rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 37px;
    width: 165px;

    ${desktopL} {
      height: 29px;
    }

    ${laptop} {
      height: 18px;
      width: 90px;
    }

    ${tablet} {
      width: 80px;
    }

    ${disableUserShared}
    cursor: auto;

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;
      image-rendering: pixelated;

      ${disableUserShared}

      ${desktopL} {
        height: 25px;
        width: 25px;
      }

      ${laptop} {
        height: 17px;
        width: 17px;
        margin: 0 0.3rem;
      }

      ${tablet} {
        height: 15px;
        width: 15px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${desktopL} {
        font-size: 1.5rem;
      }

      ${laptop} {
        font-size: 1rem;
        margin-top: 0.3rem;
      }

      ${tablet} {
        font-size: 0.9rem;
        margin-top: 0.2rem;
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

  ${desktopL} {
    top: 80px;
    max-height: 400px;
    padding-top: 0;
  }

  ${laptop} {
    top: 50px;
    left: 15px;
    max-height: 275px;
  }

  ${tablet} {
    top: 40px;
    left: 17px;
    max-height: 155px;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 1.2rem;
    ${disableUserShared}
    pointer-events: none;

    ${desktopL} {
      font-size: 1.3rem;
      line-height: 30px;
      margin-bottom: 1rem;
      padding-right: 30px;
    }

    ${laptop} {
      font-size: 1.1rem;
      line-height: 25px;
    }

    ${tablet} {
      font-size: 0.8rem;
      line-height: 18px;
      margin-bottom: 0.8rem;
    }

    &:last-of-type {
      margin-bottom: 3rem;

      ${laptop} {
        margin-bottom: 1rem;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 55px;

    ${desktopL} {
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
    height: 37px;
    width: 37px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${scrollArrowUp}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${scrollArrowDown}) center/contain no-repeat;
  }
`;
