import styled from "styled-components";

import toolbar from "../images/buttons/toolbar.png";

export const ToolbarContainer = styled.div`
  position: relative;
`;

export const ToolButton = styled.img`
  height: 36px;
  width: 168px;
  background: url(${toolbar});
  background-repeat: no-repeat;
  background-size: contain;
  user-select: none;
  cursor: pointer;
`;

export const Clock = styled.p`
  font-size: 1.4rem;
  position: absolute;
  left: 75%;
  top: 44%;
  transform: translate(-50%, -50%);
  user-select: none;
  cursor: pointer;
`;
