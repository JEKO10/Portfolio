import styled from "styled-components";

import timeHandle from "../images/handles/timeHandle.jpg";
import time from "../images/modals/timeModal.jpg";

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
};

export const ClockModal = styled.section<FilesProps>`
  background: url(${time}) center/cover no-repeat;
  position: relative;
  height: 486px;
  width: 576px;
  z-index: ${({ lastClicked }) => (lastClicked === "time" ? 2 : 1)};
`;

export const ClockHandle = styled.div`
  background: url(${timeHandle}) center/cover no-repeat;
  height: 38px;
  width: 100%;
  cursor: grab;
`;

export const DigitalClock = styled.p`
  position: absolute;
  bottom: 30%;
  right: 20%;
  user-select: none;
  pointer-events: none;
  letter-spacing: 1px;
`;
