import styled from "styled-components";

import start from "../images/modals/startMenu.jpg";

type StartContainerPosition = {
  position: boolean | undefined;
};

export const StartContainer = styled.section<StartContainerPosition>`
  background: url(${start}) center/contain no-repeat;
  height: 350px;
  width: 250px;
  transform: ${({ position }) =>
    position ? `translateY(-34px)` : `translateY(500px)`};
  transition: transform 500ms ease;

  img {
    width: 249px;
    cursor: pointer;
  }
`;
