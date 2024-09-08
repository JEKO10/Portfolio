import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import time from "../images/modals/timeModal.jpg";
import timeHandle from "../images/other/handle.jpg";
import {
  disableUserShared,
  laptop,
  mobile,
  primaryFont,
  tablet,
} from "./GlobalStyles";

type BtnProps = {
  right: number;
};

export const TimeModal = styled.section<FilesProps>`
  background: url(${time}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 486px;
  width: 576px;

  ${laptop} {
    height: 337px;
    width: 400px;
  }

  ${tablet} {
    height: 253px;
    width: 300px;
    top: 20px;
    left: 70px;
  }

  ${mobile} {
    left: 10px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  z-index: ${({ lastClicked }) => (lastClicked === "time" ? 2 : 1)};

  p {
    ${disableUserShared}
  }
`;

export const TimeHandle = styled.article`
  background: url(${timeHandle}) center/cover no-repeat;
  height: 26px;
  width: 567px;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  cursor: grab;

  ${laptop} {
    height: 18px;
    width: 393px;
  }

  ${tablet} {
    height: 13px;
    width: 295px;
    top: 0.15rem;
    left: 0.15rem;
  }
`;

export const DigitalClock = styled.p`
  position: absolute;
  bottom: 30%;
  right: 20%;
  user-select: none;
  pointer-events: none;
  letter-spacing: 1px;

  ${laptop} {
    font-size: 0.8rem;
    right: 19.3%;
    letter-spacing: 0.5px;
  }

  ${tablet} {
    font-size: 0.6rem;
    right: 18.7%;
  }
`;

export const Year = styled.p`
  position: absolute;
  top: 7.4rem;
  left: 10.7rem;
  font-size: 1.3rem;
  user-select: none;

  ${laptop} {
    font-size: 1rem;
    top: 5.15rem;
    left: 7.5rem;
  }

  ${tablet} {
    font-size: 0.8rem;
    top: 3.85rem;
    left: 5.6rem;
  }
`;

export const Month = styled.p`
  position: absolute;
  top: 7.5rem;
  left: 3rem;
  font-size: 1.1rem;
  user-select: none;

  ${laptop} {
    font-size: 0.7rem;
    top: 5.2rem;
    left: 2.1rem;
  }

  ${tablet} {
    font-size: 0.55rem;
    top: 3.95rem;
    left: 1.6rem;
  }
`;

export const TimeZone = styled.p`
  font-family: ${primaryFont};
  font-weight: 600;
  position: absolute;
  bottom: 4.95rem;
  left: 9.5rem;

  ${laptop} {
    font-size: 0.8rem;
    font-weight: 400;
    bottom: 3.4rem;
    left: 6.6rem;
  }

  ${tablet} {
    font-size: 0.7rem;
    bottom: 2.55rem;
    left: 5rem;
  }
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

  ${laptop} {
    font-size: 0.8rem;
    height: 15px;
    width: 60px;
    bottom: 0.85rem;
  }

  ${tablet} {
    font-size: 0.6rem;
    height: 10px;
    width: 50px;
    bottom: 0.7rem;
  }

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
