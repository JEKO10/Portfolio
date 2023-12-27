import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

type ToolButtonProps = {
  isClicked: boolean;
};

export const ToolbarContainer = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};
  margin-bottom: 3px;
`;

export const ToolButton = styled.div<ToolButtonProps>`
  ${flexMixin({ justify: "space-between", align: "center" })};
  height: 28px;
  width: 163px;
  margin-left: 5px;
  padding: 0 5px;
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  cursor: pointer;
  transform: ${({ isClicked }) => (isClicked ? "translate(1px, 1px)" : "")};

  img {
    height: 25px;
    width: 60px;
    user-select: none;
    cursor: pointer;
  }
`;

export const Clock = styled.p`
  font-size: 1.4rem;
  user-select: none;
  cursor: pointer;
`;
