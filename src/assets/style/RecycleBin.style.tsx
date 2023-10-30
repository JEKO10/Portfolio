import styled from "styled-components";

import recycleHandle from "../images/handles/recycleHandle.jpg";
import recycleBin from "../images/modals/recycleBin.png";

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
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
`;

export const RecycleBinHandle = styled.div<FilesProps>`
  background: url(${recycleHandle}) left/cover no-repeat;
  height: 44px;
  width: 100%;
`;
