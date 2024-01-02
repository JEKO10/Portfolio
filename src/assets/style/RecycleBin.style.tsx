import styled from "styled-components";

import recycleHandle from "../images/handles/recycleHandle.jpg";
import recycleBin from "../images/modals/recycleBin.jpg";
import { flexMixin } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/contain no-repeat;

  position: absolute;
  height: 652px;
  width: 755.5px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
`;

export const RecycleBinHandle = styled.article<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${recycleHandle}) center/contain no-repeat;
  height: 43px;
  width: 100%;
  max-width: 753px;
  margin: 0 auto;
  padding: 0 15px;
  cursor: grab;
`;
