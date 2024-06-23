import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import timeHandle from "../images/handles/timeHandle.jpg";
import time from "../images/modals/timeModal.jpg";
import { flexMixin, primaryFont } from "./GlobalStyles";

type BtnProps = {
  right: number;
};

export const TimeModal = styled.section<FilesProps>`
  background: url(${time}) center/cover no-repeat;
  position: relative;
  height: 486px;
  width: 576px;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  z-index: ${({ lastClicked }) => (lastClicked === "time" ? 2 : 1)};

  p {
    user-select: none;
    user-drag: none;
  }
`;

export const TimeHandle = styled.article`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${timeHandle}) center/cover no-repeat;
  height: 38px;
  width: 100%;
  padding: 0 15px;
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
  font-family: ${primaryFont};
  font-weight: 600;
  position: absolute;
  bottom: 4.95rem;
  left: 9.5rem;
`;

export const TimeBtn = styled.button<BtnProps>`
  background-color: #c0c0c0;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 26px;
  width: 100px;
  font-size: 1.2rem;
  font-family: ${primaryFont};
  position: absolute;
  bottom: 1.1rem;
  right: ${({ right }) => right + "rem"};
  cursor: pointer;

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    transform: translate(1px, 1px);
  }
`;
