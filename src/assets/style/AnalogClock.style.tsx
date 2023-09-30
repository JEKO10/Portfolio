import styled from "styled-components";

export const ClockWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Clock = styled.div`
  height: 181px;
  width: 181px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  background: url("../images/other/clock.png") center/contain no-repeat;

  > * {
    transform-origin: 0%;
    background-color: rgb(0, 0, 0);
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

export const Seconds = styled.div`
  height: 7.5px;
  width: 62.5px;
  background: url("../assets/images/other/seconds.png") center/contain no-repeat;
  top: 52%;
  left: 52%;
`;

export const Minutes = styled.div`
  height: 55px;
  width: 77px;
  background: url("../assets/images/other/minutes.png") center/contain no-repeat;
  top: 42%;
  left: 58%;
`;

export const Hours = styled.div`
  height: 35px;
  width: 55px;
  background: url("../assets/images/other/hours.png") center/contain no-repeat;
  top: 47%;
  left: 54%;
`;
