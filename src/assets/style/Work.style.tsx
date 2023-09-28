import styled from "styled-components";

import workHandle from "../images/handles/workHandle.jpg";
import workModal from "../images/modals/workModal.jpg";

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/cover no-repeat;
  position: absolute;
  height: 759px;
  width: 878px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.div`
  background: url(${workHandle}) center/cover no-repeat;
  height: 48px;
  width: 100%;
`;
