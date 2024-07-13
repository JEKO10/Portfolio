import styled from "styled-components";

import start from "../images/modals/startMenuBg.jpg";
import { desktopL, disableUserShared, flexMixin } from "./GlobalStyles";

type StartContainerPosition = {
  isOpen: boolean | undefined;
};

export const StartContainer = styled.section<StartContainerPosition>`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  background: url(${start}) center/contain no-repeat;
  height: 475px;
  width: 337px;
  position: absolute;
  bottom: 2.81rem;
  padding: 6px 6.21px 8px 3.5px;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(110%)")};
  transition: transform 500ms ease;
  z-index: 10;

  ${desktopL} {
    height: 300px;
    width: 212px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(120%)"};
  }

  > img {
    display: block;
    margin: 0 auto;

    ${desktopL} {
      width: 204.5px;
    }
  }

  img,
  p {
    ${disableUserShared}
  }
`;

export const StartMenuBtn = styled.article`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  height: 91px;
  width: 100%;
  padding: 20px 25px;
  transition: all 200ms ease;

  ${desktopL} {
    height: 55px;
    padding: 10px 15px;
  }

  & {
    :hover {
      background-color: #001358;
      color: #fff;
    }

    :last-of-type {
      padding: 20px 25px 8px;

      ${desktopL} {
        padding: 10px 15px 5px;
      }
    }
  }

  img {
    height: 56px;
    width: 56px;

    margin-right: 1.8rem;
    image-rendering: pixelated;

    ${desktopL} {
      height: 39px;
      width: 39px;
      margin-right: 1rem;
    }
  }

  p {
    font-size: 1.8rem;

    ${desktopL} {
      font-size: 1.4rem;
    }
  }
`;
