import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import workModal from "../images/modals/workModal.jpg";
import workHandle from "../images/other/handle.jpg";
import { desktopL, disableUserShared, flexMixin } from "./GlobalStyles";
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

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};

  > div {
    height: 45px;
    width: 115px;

    ${desktopL} {
      height: 37px;
      width: 95px;
    }

    button {
      height: 19.5px;
      width: 22.5px;

      ${desktopL} {
        height: 14px;
        width: 17px;

        img {
          scale: 0.7;
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

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: 140px;

    ${disableUserShared}
    cursor: auto;

    ${desktopL} {
      height: 19px;
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
    }

    p {
      font-size: 1.5rem;
      color: #fff;

      ${desktopL} {
        font-size: 1.3rem;
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
      alt === "walkmate" &&
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
      alt === "travel" &&
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

  img {
    height: 100px;
    width: 100px;

    ${desktopL} {
      height: 80px;
      width: 80px;
    }
  }

  p {
    color: ${({ isClicked }) => (isClicked ? "#fff" : "#000")};

    ${desktopL} {
      font-size: 1.3rem;
    }
  }
`;
