import styled from "styled-components";

import recycleHandle from "../images/handles/recycleHandle.jpg";
import recycleBin from "../images/modals/recycleBin.png";
import { flexMixin } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/contain no-repeat;
  position: absolute;
  height: 681px;
  width: 787px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
`;

export const RecycleBinHandle = styled.article<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${recycleHandle}) center/cover no-repeat;
  height: 44px;
  width: 98.5%;
  max-width: 787px;
  margin: 0 auto;
  padding: 0 15px;
  cursor: grab;
`;
