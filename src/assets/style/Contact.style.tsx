import styled from "styled-components";

import contactHandle from "../images/handles/contactHandle.jpg";
import contactModal from "../images/modals/contactModal.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  height: 620px;
  width: 998px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};
`;

export const ContactHandle = styled.div<FilesProps>`
  background: url(${contactHandle}) center/cover no-repeat;
  height: 57px;
  width: 100%;
  cursor: grab;
`;
