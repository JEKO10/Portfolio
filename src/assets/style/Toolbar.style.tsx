import styled from "styled-components";

import toolbar from "../images/buttons/toolbar.png";
import toolbarClicked from "../images/buttons/toolbarClicked.jpg";

type ToolButtonProps = {
  isClicked: boolean;
};

export const ToolbarContainer = styled.div`
  position: relative;
`;

export const ToolButton = styled.img<ToolButtonProps>`
  background: ${({ isClicked }) =>
    isClicked
      ? `url(${toolbarClicked}) center/cover no-repeat`
      : `url(${toolbar}) center/contain no-repeat`};
  height: 36px;
  width: 168px;
  background-repeat: no-repeat;
  background-size: contain;
  user-select: none;
  cursor: pointer;
`;

export const Clock = styled.p<ToolButtonProps>`
  font-size: 1.4rem;
  position: absolute;
  left: 75%;
  top: ${({ isClicked }) => (isClicked ? `46%` : ` 44%`)};
  transform: translate(-50%, -50%);
  user-select: none;
  cursor: pointer;
`;
