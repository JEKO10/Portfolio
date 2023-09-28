import styled from "styled-components";

import recycleHandle from "../images/handles/recycleHandle.jpg";
import recycleBin from "../images/modals/recycleBin.png";

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

export const RecycleBinFile = styled.section<FilesProps>`
  background: url(${recycleBin}) center/cover no-repeat;
  position: absolute;
  height: 681px;
  width: 787px;
  z-index: ${({ lastClicked }) => (lastClicked === "recycle" ? 2 : 1)};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const RecycleBinHandle = styled.div`
  background: url(${recycleHandle}) center/cover no-repeat;
  height: 44px;
  width: 787px;
`;
