import styled from "styled-components";

import contactHandle from "../images/handles/contactHandle.jpg";
import contactModal from "../images/modals/contactModal.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const ContactFile = styled.section<FilesProps>`
  background: ${({ isVisible }) =>
    isVisible ? `url(${contactModal}) center/contain no-repeat` : "none"};
  position: absolute;
  height: 620px;
  width: 998px;

  > *:not(.handle) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
  z-index: ${({ lastClicked }) => (lastClicked === "about" ? 2 : 1)};
`;

export const ContactHandle = styled.div<FilesProps>`
  background: url(${contactHandle}) left/cover no-repeat;
  height: 57px;
  width: ${({ isVisible }) => (isVisible ? "100%" : "17%")};

  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 0)" : "translate(0, 2000%)"};
  transition: transform 200ms linear, width 100ms linear;
`;
