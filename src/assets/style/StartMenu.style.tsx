import styled from "styled-components";

import start from "../images/modals/startMenuBg.jpg";
import { flexMixin } from "./GlobalStyles";

type StartContainerPosition = {
  isOpen: boolean | undefined;
};

export const StartContainer = styled.section<StartContainerPosition>`
  background: url(${start}) center/contain no-repeat;
  height: 475px;
  width: 337px;
  padding: 6px 6.22px 8px 3.5px;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(110%)")};
  transition: transform 500ms ease;
  position: absolute;
  bottom: 2.81rem;
  z-index: 10;
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;

  article {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 91px;
    width: 100%;
    padding: 20px 25px;
    transition: all 200ms ease;
    cursor: pointer;

    & {
      :hover {
        background-color: #001358;
        color: #fff;
      }

      :last-of-type {
        padding: 20px 25px 8px;
      }
    }

    img {
      margin-right: 1.8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  > img {
    display: block;
    margin: 0 auto;
  }
`;

export const StartDash = styled.img`
  height: 6px !important;
  width: 294px !important;
  display: block;
  margin: 0 auto;
`;

// img {
//     height: 91px;
//     width: 337px;
//     cursor: pointer;
//     /* position: absolute;
//     left: 0;
//     margin-left: 0.1rem; */

//     &:first-of-type {
//       height: 104px;
//     }
//   }
