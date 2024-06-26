import styled, { css } from "styled-components";

import { flexMixin } from "./GlobalStyles";

type IconProps = {
  isClicked: boolean;
  iconName?: string;
};

export const iconsSharedStyle = css<IconProps>`
  img {
    height: 100px;
    width: 100px;
    /* image-rendering: pixelated; */
    margin-bottom: 0.5rem;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  p {
    font-size: 1.875rem;
    color: #fff;
    background-color: ${({ isClicked }) =>
      isClicked && "rgba(29, 0, 208, 0.5)"};
    padding: 0 5px;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    user-select: none;
    pointer-events: none;
  }
`;

export const IconsContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
`;

export const Icon = styled.div<IconProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  position: relative;
  margin: 20px 15px;
  cursor: pointer;

  ${iconsSharedStyle};
`;

export const RecycleBin = styled.div<IconProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  right: 0;
  margin: 40px 30px;
  cursor: pointer;

  ${iconsSharedStyle};
`;

export const Selection = styled.div<IconProps>`
  display: ${({ isClicked }) => (isClicked ? "block" : "none")};
  background: #1d00d0;
  /* background: rgba(29, 0, 208, 0.5); */
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  mask-image: ${({ iconName }) => `url(${iconName})`};
  -webkit-mask-image: ${({ iconName }) => `url(${iconName})`};
  opacity: 0.5;
`;
