import styled, { css } from "styled-components";

import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  mobile,
  tablet,
} from "./GlobalStyles";

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

    ${laptop} {
      height: 70px;
      width: 70px;
    }

    ${mobile} {
      height: 50px;
      width: 50px;
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

    ${laptop} {
      font-size: 1.4rem;
    }

    ${mobile} {
      font-size: 1.2rem;
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

  ${mobile} {
    padding: 5px;
  }
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

  ${mobile} {
    margin: 40px 15px;
  }
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

  ${laptop} {
    height: 70px;
    width: 70px;
  }

  ${mobile} {
    height: 50px;
    width: 50px;
  }

  ${({ iconName }) =>
    iconName?.includes("book") &&
    css`
      ${tablet} {
        height: 50px;
        width: 50px;
      }
    `};

  ${({ iconName }) =>
    iconName?.includes("project") &&
    css`
      ${desktopL} {
        height: 80px;
        width: 80px;
      }

      ${laptop} {
        height: 60px;
        width: 60px;
      }

      ${tablet} {
        height: 45px;
        width: 45px;
      }
    `};
`;
/* ${laptop} {
    margin: 10px 50px 15px 0;
  } */
