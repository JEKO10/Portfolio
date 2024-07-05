import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import recycleHandle from "../images/handles/handle.jpg";
import recycleBin from "../images/modals/recycleBin.jpg";
import { disableUserShared, flexMixin } from "./GlobalStyles";

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/contain no-repeat;

  position: absolute;
  height: 652px;
  width: 755px;

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

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 30px;
    width: 160px;

    ${disableUserShared}
    cursor: auto;

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.5rem;

      ${disableUserShared}
    }

    p {
      font-size: 1.5rem;
      color: #fff;
    }
  }
`;
