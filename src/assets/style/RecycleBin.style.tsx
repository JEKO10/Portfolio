import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import recycleBin from "../images/modals/recycleBin.jpg";
import recycleBinSmall from "../images/modals/recycleBinSmall.jpg";
import recycleHandle from "../images/other/handle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  mobile,
  tablet,
} from "./GlobalStyles";

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

  ${laptop} {
    height: 346px;
    width: 400px;
    left: 300px;
  }

  ${tablet} {
    background: url(${recycleBinSmall}) center/contain no-repeat;
    height: 271px;
    width: 300px;
    left: 150px;
  }

  ${mobile} {
    top: 10px;
    left: 10px;
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

  ${laptop} {
    height: 17px;
    width: 392px;
    margin: 0.25rem auto;
  }

  ${tablet} {
    height: 20px;
    width: 294px;
    margin: 0.3rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 30px;
    width: 160px;

    ${desktopL} {
      height: 25.5px;
      width: 135px;
    }

    ${laptop} {
      height: 17px;
      width: 100px;
    }

    ${tablet} {
      height: 20px;
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

      ${laptop} {
        height: 14px;
        width: 14px;
        margin: 0 0.3rem;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-top: 0.2rem;

      ${desktopL} {
        font-size: 1.3rem;
      }

      ${laptop} {
        font-size: 1rem;
        margin-top: 0.1rem;
      }
    }
  }
`;
