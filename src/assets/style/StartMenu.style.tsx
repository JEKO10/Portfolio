import styled from "styled-components";

import start from "../images/modals/startMenu.jpg";

type StartContainerPosition = {
  isOpen: boolean | undefined;
};

export const StartContainer = styled.section<StartContainerPosition>`
  background: url(${start}) center/contain no-repeat;
  height: 475px;
  width: 337px;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(110%)")};
  transition: transform 500ms ease;
  position: absolute;
  bottom: 3.4rem;
  z-index: 10;
  pointer-events: none;
  user-select: none;

  img {
    height: 91px;
    width: 337px;
    cursor: pointer;
    /* position: absolute;
    left: 0;
    margin-left: 0.1rem; */

    &:first-of-type {
      height: 104px;
    }
  }
`;

export const StartDash = styled.img`
  height: 6px !important;
  width: 294px !important;
  display: block;
  margin: 0 auto;
`;
