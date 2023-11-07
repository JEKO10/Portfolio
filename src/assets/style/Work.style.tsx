import styled from "styled-components";

import workHandle from "../images/handles/workHandle.jpg";
import workModal from "../images/modals/workModal.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/contain no-repeat;

  position: absolute;
  height: 759px;
  width: 878px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.div<FilesProps>`
  background: url(${workHandle}) center/cover no-repeat;
  height: 45px;
  width: 99.99%;
  max-width: 878px;
  margin: 0 auto;
  cursor: grab;
`;
