import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import recycleBin from "../images/modals/recycleBin.jpg";
import recycleHandle from "../images/other/handle.jpg";
import { desktopL, disableUserShared, flexMixin } from "./GlobalStyles";

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 400px;
  height: 652px;
  width: 755px;

  ${desktopL} {
    height: 500px;
    width: 578px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
`;

export const RecycleBinHandle = styled.article<FilesProps>`
  background: url(${recycleHandle}) center/cover no-repeat;
  height: 33px;
  width: 741px;
  margin: 0.45rem auto;
  cursor: grab;

  ${desktopL} {
    height: 25.5px;
    width: 569px;
    margin: 0.35rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 30px;
    width: 160px;

    ${desktopL} {
      height: 25.5px;
    }

    ${disableUserShared}
    cursor: auto;

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.5rem;

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
