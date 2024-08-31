import styled, { css } from "styled-components";

import { desktopL, disableUserShared, flexMixin, tablet } from "./GlobalStyles";

type BtnContainer = {
  iconName: string;
};

export const ControlBtnsContainer = styled.div<BtnContainer>`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 53px;
  width: 125px;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 0.8rem;

  > div {
    ${flexMixin({ justify: "center", align: "center" })};

    button {
      margin: 0 0.3rem;
    }
  }

  ${({ iconName }) =>
    iconName === "recycle"
      ? css`
          height: 48px;
          width: 115px;

          ${desktopL} {
            height: 37px;
            width: 95px;
          }

          button {
            height: 19.5px;
            width: 22.5px;

            ${desktopL} {
              height: 15px;
              width: 19px;

              img {
                scale: 0.8;
              }
            }
          }
        `
      : iconName === "book"
        ? css`
            ${desktopL} {
              height: 41px;
              width: 110px;

              button {
                height: 19px;
                width: 22px;

                img {
                  scale: 0.9;
                }
              }
            }
          `
        : ""}
`;

const controlButtonStyles = css`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: #c0c0c0;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 22px;
  width: 25px;
  margin-left: 0.5rem;

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    & img {
      transform: translate(1px, 1px);
    }
  }

  img {
    ${disableUserShared}
  }
`;

export const ControlButton = styled.button<BtnContainer>`
  ${controlButtonStyles};
  height: ${({ iconName }) => iconName === "work" && "20px"};
`;

export const MinimizeBtn = styled.button<BtnContainer>`
  ${controlButtonStyles};
  justify-content: flex-start !important;
  align-items: flex-end !important;

  height: ${({ iconName }) => iconName === "work" && "20px"};

  img {
    margin: 0.2rem;

    ${tablet} {
      margin: 0;
    }
  }
`;
