import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import contactModal from "../images/modals/contactModal.jpg";
import contactModalSmall from "../images/modals/contactModalSmall.jpg";
import contactHandle from "../images/other/handle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  mobile,
  primaryFont,
  tablet,
} from "./GlobalStyles";

type ContactProps = {
  bottom: number;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 620px;
  width: 998px;

  ${desktopL} {
    height: 480px;
    width: 772px;
  }

  ${laptop} {
    height: 310px;
    width: 500px;
  }

  ${tablet} {
    background: url(${contactModalSmall}) center/contain no-repeat;
    height: 193px;
    width: 300px;
    top: 10px;
    left: 120px;
  }

  ${mobile} {
    left: 10px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};

  > div {
    margin-top: 0.2rem;

    ${desktopL} {
      height: 50px;
      width: 120px;
      margin-top: 0;

      button {
        height: 21px;
        width: 23px;

        img {
          scale: 0.9;
        }
      }
    }

    ${laptop} {
      height: 30px;
      width: 90px;
      margin-top: 0;

      button {
        height: 13px;
        width: 15px;

        img {
          scale: 0.6;
        }
      }
    }

    ${tablet} {
      height: 25px;
      width: 70px;

      button {
        height: 9px;
        width: 11px;

        img {
          scale: 0.5;
        }
      }
    }
  }
`;

export const ContactHandle = styled.article<FilesProps>`
  background: url(${contactHandle}) center/cover no-repeat;
  height: 43px;
  width: 980px;
  margin: 0.5rem auto;
  cursor: grab;

  ${desktopL} {
    height: 33px;
    width: 759px;
  }

  ${laptop} {
    height: 21px;
    width: 491px;
    margin: 0.3rem auto;
  }

  ${tablet} {
    height: 20px;
    width: 295px;
    margin: 0.15rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 44px;
    width: 160px;

    ${disableUserShared}
    cursor: auto;

    ${desktopL} {
      height: 34px;
      width: 140px;
    }

    ${laptop} {
      height: 22px;
      width: 85px;
    }

    ${tablet} {
      height: 20px;
      width: 80px;
    }

    img {
      height: 33px;
      width: 33px;
      margin: 0 0.5rem;

      ${disableUserShared}

      ${desktopL} {
        height: 30px;
        width: 30px;
        margin: 0 0.8rem;
      }

      ${laptop} {
        height: 17px;
        width: 17px;
        margin: 0 0.4rem;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;
      margin: 0 0.5rem;

      ${desktopL} {
        font-size: 1.7rem;
        margin: 0;
      }

      ${laptop} {
        font-size: 1.1rem;
      }

      ${tablet} {
        font-size: 1rem;
      }
    }
  }
`;

export const ContactTextarea = styled.textarea`
  background-color: #fff;
  box-shadow:
    -2px -2px 0 0 #818181,
    -2px 0 0 0 #818181,
    0 -2px 0 0 #818181,
    -4px -4px 0 0 black,
    -4px 0 0 0 black,
    0 -4px 0 0 black,
    2px 2px 0 0 #e0dede,
    0 2px 0 0 #e0dede,
    2px 0 0 0 #e0dede,
    2px -2px 0 0 #818181,
    -2px 2px 0 0 #e0dede,
    -4px 2px 0 0 black,
    -4px 4px 0 0 white,
    4px 4px 0 0 white,
    4px 0 0 0 white,
    0 4px 0 0 white,
    2px -4px 0 0 black,
    4px -4px 0 0 white;

  font-size: 2rem;
  font-family: ${primaryFont};
  line-height: 40px;
  height: 320px;
  width: 950px;
  position: absolute;
  top: 8.3rem;
  left: 1.5rem;
  padding: 15px;
  outline: none;
  resize: none;

  ${desktopL} {
    font-size: 1.5rem;
    height: 240px;
    width: 720px;
    top: 6.5rem;
    padding: 10px;
  }

  ${laptop} {
    font-size: 1.3rem;
    line-height: 30px;
    height: 150px;
    width: 450px;
    top: 4.5rem;
    left: 1.1rem;
    padding: 5px 10px;
  }

  ${tablet} {
    font-size: 1rem;
    line-height: 20px;
    height: 80px;
    width: 275px;
    top: 3.2rem;
    left: 0.8rem;
    padding: 7px;
  }
`;

export const ContactInput = styled.div<ContactProps>`
  position: absolute;
  left: 4rem;
  bottom: ${({ bottom }) => bottom + "rem"};

  ${desktopL} {
    bottom: ${({ bottom }) => bottom - 0.5}rem;

    &:first-of-type {
      bottom: ${({ bottom }) => bottom - 1.2}rem;
    }
  }

  ${laptop} {
    left: 1rem;

    bottom: ${({ bottom }) => bottom - 1}rem;

    &:first-of-type {
      bottom: ${({ bottom }) => bottom - 3}rem;
    }
  }

  ${tablet} {
    left: 1rem;

    bottom: ${({ bottom }) => bottom - 1.2}rem;

    &:first-of-type {
      bottom: ${({ bottom }) => bottom - 4}rem;
    }
  }

  label {
    font-size: 1.5rem;
    margin-right: 1rem;

    ${laptop} {
      font-size: 0.8rem;
      margin-right: 0.7rem;
    }
  }

  &:first-of-type input {
    margin-left: -2px;
  }

  input {
    background-color: #d9d9d9;
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

    font-size: 2rem;
    font-family: ${primaryFont};
    height: 47px;
    width: 544px;
    padding: 0 10px;
    outline: none;

    ${desktopL} {
      font-size: 1.5rem;
      height: 35px;
      width: 400px;
      padding: 0 5px;
    }

    ${laptop} {
      font-size: 1rem;
      height: 20px;
      width: 250px;
    }

    ${tablet} {
      font-size: 0.8rem;
      height: 13px;
      width: 140px;
      padding: 0;
    }

    &:focus {
      box-shadow:
        -2px -2px 0 0 #818181,
        -2px 0 0 0 #818181,
        0 -2px 0 0 #818181,
        -4px -4px 0 0 black,
        -4px 0 0 0 black,
        0 -4px 0 0 black,
        2px 2px 0 0 #e0dede,
        0 2px 0 0 #e0dede,
        2px 0 0 0 #e0dede,
        2px -2px 0 0 #818181,
        -2px 2px 0 0 #e0dede,
        -4px 2px 0 0 black,
        -4px 4px 0 0 white,
        4px 4px 0 0 white,
        4px 0 0 0 white,
        0 4px 0 0 white,
        2px -4px 0 0 black,
        4px -4px 0 0 white;
    }
  }
`;

export const ContactButton = styled.button<ContactProps>`
  background-color: #d9d9d9;
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

  height: 47px;
  width: 178px;
  font-size: 1.8rem;
  font-family: ${primaryFont};
  position: absolute;
  right: 2.15rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  cursor: pointer;

  ${desktopL} {
    font-size: 1.5rem;
    height: 35px;
    width: 120px;

    bottom: ${({ bottom }) => bottom - 0.5}rem;

    &#send {
      bottom: ${({ bottom }) => bottom - 1.2}rem;
    }
  }

  ${laptop} {
    font-size: 1rem;
    height: 20px;

    bottom: ${({ bottom }) => bottom - 1}rem;

    &#send {
      bottom: ${({ bottom }) => bottom - 3}rem;
    }
  }

  ${tablet} {
    font-size: 0.8rem;
    height: 13px;
    width: 50px;
    right: 1rem;

    bottom: ${({ bottom }) => bottom - 1.15}rem;

    &#send {
      bottom: ${({ bottom }) => bottom - 3.95}rem;
    }
  }

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

    transform: translate(1px, 1px);
  }
`;

export const ContactSocials = styled.article`
  position: absolute;
  top: 4.3rem;
  right: 10.5rem;

  ${desktopL} {
    top: 3.4rem;
    right: 8.5rem;
  }

  ${laptop} {
    top: 2.3rem;
    right: 5.5rem;
  }

  ${tablet} {
    top: 1.85rem;
    right: 3.4rem;
  }

  button {
    height: 44px;
    width: 47px;
    background-color: #c0c0c0;
    margin-left: 0.8rem;
    cursor: pointer;

    ${desktopL} {
      height: 32px;
      width: 36px;
    }

    ${laptop} {
      height: 18px;
      width: 22px;
    }

    ${tablet} {
      height: 8px;
      width: 10px;
      margin-left: 0.8rem;
    }

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
      height: 35px;
      width: 100%;
      margin-top: 4px;
      ${disableUserShared}

      ${desktopL} {
        margin-top: -2px;
        scale: 0.8;
      }

      ${laptop} {
        margin-top: -8px;
      }

      ${tablet} {
        margin-top: -14px;
        scale: 1.1;
      }
    }
  }
`;
