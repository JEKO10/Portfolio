import styled from "styled-components";

import workHandle from "../images/handles/workHandle.jpg";
import workModal from "../images/modals/workModal.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const WorkFile = styled.section<FilesProps>`
  background: ${({ isVisible }) =>
    isVisible ? `url(${workModal}) center/contain no-repeat` : "none"};

  position: absolute;
  height: 759px;
  width: 878px;

  > *:not(.handle) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.div<FilesProps>`
  background: url(${workHandle}) left/cover no-repeat;
  height: 48px;
  width: ${({ isVisible }) => (isVisible ? "100%" : "20%")};

  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 0)" : "translate(0, 2000%)"};
  transition: transform 200ms linear, width 100ms linear;
`;
