import styled from "styled-components";

import timeHandle from "../images/handles/timeHandle.jpg";
import time from "../images/modals/timeModal.jpg";
import { flexMixin } from "./GlobalStyles";

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
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${timeHandle}) center/cover no-repeat;
  height: 38px;
  width: 100%;
  padding: 0 15px;
  cursor: grab;

  > div {
    margin-top: 3px;
    ${flexMixin({ justify: "center", align: "center" })};

    button {
      margin-left: 0.5rem;
    }

    > div {
      ${flexMixin({ justify: "center", align: "center" })};

      button {
        margin: 0 0.3rem;
      }
    }
  }
`;

export const DigitalClock = styled.p`
  position: absolute;
  bottom: 30%;
  right: 20%;
  user-select: none;
  pointer-events: none;
  letter-spacing: 1px;
`;

export const Year = styled.p`
  position: absolute;
  top: 7.25rem;
  left: 10.7rem;
  font-size: 1.3rem;
  user-select: none;
`;

export const Month = styled.p`
  position: absolute;
  top: 7.35rem;
  left: 3rem;
  font-size: 1.1rem;
  user-select: none;
`;

export const TimeZone = styled.p`
  position: absolute;
  bottom: 4.9rem;
  left: 9.5rem;
`;
