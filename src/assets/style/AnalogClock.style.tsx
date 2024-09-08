import styled from "styled-components";

import bigNeedle from "../images/other/bigNeedle.png";
import clock from "../images/other/clock.png";
import seconds from "../images/other/seconds.png";
import { laptop, tablet } from "./GlobalStyles";

export const Clock = styled.div`
  width: 181px;
  height: 181px;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 73%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  background: url(${clock}) center/cover no-repeat;

  ${laptop} {
    top: 33%;
    left: 67%;
    scale: 0.7;
  }

  ${tablet} {
    top: 25%;
    left: 60%;
    scale: 0.55;
  }

  &::after {
    background: #ff0000;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
  }

  > * {
    transform-origin: 51% 80%;
  }
`;

export const Hours = styled.div`
  position: absolute;
  width: 75px;
  height: 55px;
  background: url(${bigNeedle}) center/contain no-repeat;
  top: 26%;
  left: 28.5%;
`;

export const Minutes = styled.div`
  position: absolute;
  width: 75px;
  height: 70px;
  background: url(${bigNeedle}) center/contain no-repeat;
  top: 19.5%;
  left: 29%;
  z-index: 2;
`;

export const Seconds = styled.div`
  position: absolute;
  width: 2px;
  height: 75px;
  background: url(${seconds}) center/cover no-repeat;
  top: 8.5%;
  left: 49.5%;
  transform-origin: bottom;
`;
