import styled from "styled-components";

import start from "../images/modals/startMenu.jpg";

type StartContainerPosition = {
  position: boolean | undefined;
};

export const StartContainer = styled.section<StartContainerPosition>`
  background: url(${start}) center/cover no-repeat;
  height: 475px;
  width: 337px;
  transform: ${({ position }) =>
    position ? `translateY(-159px)` : `translateY(500px)`};
  transition: transform 500ms ease;
`;
