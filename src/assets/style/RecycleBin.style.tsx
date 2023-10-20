import styled from "styled-components";

import recycleHandle from "../images/handles/recycleHandle.jpg";
import recycleBin from "../images/modals/recycleBin.png";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const RecycleBinFile = styled.section<FilesProps>`
  background: ${({ isVisible }) =>
    isVisible ? `url(${recycleBin}) center/contain no-repeat` : "none"};
  position: absolute;
  height: 681px;
  width: 787px;

  > *:not(.handle) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
`;

export const RecycleBinHandle = styled.div<FilesProps>`
  background: url(${recycleHandle}) left/cover no-repeat;
  height: 44px;
  width: ${({ isVisible }) => (isVisible ? "100%" : "23%")};

  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 0)" : "translate(0, 2000%)"};
  transition: transform 200ms linear, width 100ms linear;
`;
