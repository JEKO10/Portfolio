import styled from "styled-components";

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
  background: url("/src/assets/images/other/clock.png") center/cover no-repeat;

  &::after {
    background: #ff0000;
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Hours = styled.div`
  position: absolute;
  width: 75px;
  height: 55px;
  background: url("/src/assets/images/other/bigNeedle.png") center/contain
    no-repeat;
  top: 19%;
  left: 30%;
  transform-origin: bottom;
`;

export const Minutes = styled.div`
  position: absolute;
  width: 75px;
  height: 70px;
  background: url("/src/assets/images/other/bigNeedle.png") center/contain
    no-repeat;
  top: 12.5%;
  left: 29%;
  transform-origin: bottom;
`;

export const Seconds = styled.div`
  position: absolute;
  width: 2px;
  height: 75px;
  background: url("/src/assets/images/other/seconds.png") center/cover no-repeat;
  top: 8.5%;
  left: 49.5%;
  transform-origin: bottom;
`;
