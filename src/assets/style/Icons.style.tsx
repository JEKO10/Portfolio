import styled, { css } from "styled-components";

import { flexMixin } from "./GlobalStyles";

type IconProps = {
  isClicked: boolean;
  iconName?: string;
};

const iconsSharedStyle = css`
  img {
    height: 100px;
    width: 100px;
    /* image-rendering: pixelated; */
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.875rem;
    color: #fff;
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
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  mask-image: ${({ iconName }) => `url(${iconName})`};
  -webkit-mask-image: ${({ iconName }) => `url(${iconName})`};
  opacity: 0.5;
`;
