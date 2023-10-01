import styled from "styled-components";

export const Clock = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  background: url("/src/assets/images/other/clock.png") center/cover no-repeat;

  &::after {
    background: #aaa;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
  }
`;

export const Hours = styled.div`
  position: absolute;
  width: 6px;
  height: 60px;
  background: url("/src/assets/images/other/hours.png") center/cover no-repeat;
  top: 30%;
  left: 49%;
  transform-origin: bottom;
`;

export const Minutes = styled.div`
  position: absolute;
  width: 4px;
  height: 80px;
  background: url("/src/assets/images/other/minutes.png") center/cover no-repeat;
  top: 22.5%;
  left: 49%;
  transform-origin: bottom;
`;

export const Seconds = styled.div`
  position: absolute;
  width: 2px;
  height: 118px;
  background: url("/src/assets/images/other/seconds.png") center/cover no-repeat;
  top: 10.5%;
  left: 50%;
  transform-origin: bottom;
`;
