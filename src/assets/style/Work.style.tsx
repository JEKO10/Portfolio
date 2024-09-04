import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import workModal from "../images/modals/workModal.jpg";
import workModalSmall from "../images/modals/workModalSmall.jpg";
import workHandle from "../images/other/handle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  tablet,
} from "./GlobalStyles";
import { iconsSharedStyle } from "./Icons.style";

type ProjectProps = {
  top: number;
  left: number;
  alt: string;
  isClicked: boolean;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 300px;
  height: 652px;
  width: 756px;

  ${desktopL} {
    height: 500px;
    width: 579px;
  }

  ${laptop} {
    height: 344px;
    width: 400px;
  }

  ${tablet} {
    background: url(${workModalSmall}) center/contain no-repeat;
    height: 266px;
    width: 300px;
    left: 100px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};

  > div {
    height: 45px;
    width: 115px;

    button {
      height: 19.5px;
      width: 22.5px;
    }

    ${desktopL} {
      height: 37px;
      width: 95px;

      button {
        height: 14px;
        width: 17px;

        img {
          scale: 0.7;
        }
      }
    }

    ${laptop} {
      height: 25px;
      width: 70px;

      button {
        height: 7px;
        width: 10px;

        img {
          scale: 0.4;
        }
      }
    }

    ${tablet} {
      height: 26.5px;
      width: 75px;

      button {
        height: 11px;
        width: 14px;

        img {
          scale: 0.5;
        }
      }
    }
  }
`;

export const WorkHandle = styled.article<FilesProps>`
  background: url(${workHandle}) center/contain no-repeat;
  height: 28px;
  width: 742px;
  margin: 0.55rem auto;
  cursor: grab;

  ${desktopL} {
    height: 21px;
    width: 569px;
  }

  ${laptop} {
    height: 17px;
    width: 392px;
    margin: 0.25rem auto;
  }

  ${tablet} {
    background-size: cover;
    height: 20px;
    width: 295px;
    margin: 0.2rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: 140px;

    ${disableUserShared}
    cursor: auto;

    ${desktopL} {
      height: 19px;
    }

    ${laptop} {
      height: 15px;
    }

    ${tablet} {
      height: 18px;
      width: 90px;
    }

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.7rem;

      ${disableUserShared}

      ${desktopL} {
        height: 20px;
        width: 20px;
      }

      ${laptop} {
        height: 14px;
        width: 14px;
        margin: 0 0.5rem;
      }

      ${tablet} {
        height: 17px;
        width: 17px;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;

      ${desktopL} {
        font-size: 1.3rem;
      }

      ${laptop} {
        font-size: 0.9rem;
        margin-top: 0.2rem;
      }

      ${tablet} {
        font-size: 1rem;
      }
    }
  }
`;

export const Project = styled.div<ProjectProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  position: absolute;
  top: ${({ top }) => top + "rem"};
  left: ${({ left }) => left + "rem"};

  cursor: pointer;

  ${iconsSharedStyle}

  ${desktopL} {
    ${({ alt }) =>
      alt === "portfolio" &&
      `
    top: 11.5rem;
    left: 13rem;
  `}

    ${({ alt }) =>
      alt === "moviexd" &&
      `
    top: 11.5rem;
    left: 25rem;
  `}

  ${({ alt }) =>
      alt === "hiking" &&
      `
    top: 20rem;
    left: 12rem;
  `}

  ${({ alt }) =>
      alt === "basket" &&
      `
    top: 20rem;
    left: 23.5rem;
  `}
  }

  ${laptop} {
    ${({ alt }) =>
      alt === "portfolio" &&
      `
    top: 8rem;
    left: 9.5rem;
  `}

    ${({ alt }) =>
      alt === "moviexd" &&
      `
    top: 8rem;
    left: 17.5rem;
  `}

  ${({ alt }) =>
      alt === "hiking" &&
      `
    top: 14rem;
    left: 8.6rem;
  `}

  ${({ alt }) =>
      alt === "basket" &&
      `
    top: 14rem;
    left: 16.4rem;
  `}
  }

  ${tablet} {
    ${({ alt }) =>
      alt === "portfolio" &&
      `
    top: 6.4rem;
    left: 6.7rem;
  `}

    ${({ alt }) =>
      alt === "moviexd" &&
      `
    top: 6.4rem;
    left: 12.7rem;
  `}

  ${({ alt }) =>
      alt === "hiking" &&
      `
    top: 10.8rem;
    left: 6rem;
  `}

  ${({ alt }) =>
      alt === "basket" &&
      `
    top: 10.8rem;
    left: 12rem;
  `}
  }

  img {
    height: 100px;
    width: 100px;

    ${desktopL} {
      height: 80px;
      width: 80px;
    }

    ${laptop} {
      height: 60px;
      width: 60px;
    }

    ${tablet} {
      height: 45px;
      width: 45px;
      margin-bottom: 0.4rem;
    }
  }

  p {
    color: ${({ isClicked }) => (isClicked ? "#fff" : "#000")};
    text-align: center;

    ${desktopL} {
      font-size: 1.3rem;
    }

    ${laptop} {
      font-size: 1rem;
    }

    ${tablet} {
      font-size: 0.8rem;
    }
  }
`;
