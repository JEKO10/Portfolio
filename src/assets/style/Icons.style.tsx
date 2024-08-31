import styled, { css } from "styled-components";

import { desktopL, disableUserShared, flexMixin, tablet } from "./GlobalStyles";

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

    ${disableUserShared}

    ${tablet} {
      height: 70px;
      width: 70px;
    }
  }

  p {
    font-size: 1.875rem;
    color: #fff;
    background-color: ${({ isClicked }) =>
      isClicked && "rgba(29, 0, 208, 0.5)"};
    padding: 0 5px;

    ${disableUserShared}

    pointer-events: none;

    ${tablet} {
      font-size: 1.4rem;
    }
  }
`;

export const IconsContainer = styled.article`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: max-content;
  padding: 15px;
`;

export const Icon = styled.div<IconProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  position: relative;
  margin: 15px 50px 15px 10px;

  ${iconsSharedStyle};
`;

export const RecycleBin = styled.div<IconProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  right: 0;
  margin: 40px 30px;

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

  ${tablet} {
    height: 70px;
    width: 70px;
  }

  ${({ iconName }) =>
    iconName === "/Portfolio/src/assets/images/icons/smallProject.png" &&
    `
    ${desktopL} {
      height: 80px;
      width: 80px;
    }
  `}
`;
/* ${tablet} {
    margin: 10px 50px 15px 0;
  } */
