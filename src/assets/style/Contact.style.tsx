import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import contactModal from "../images/modals/contactModal.jpg";
import contactHandle from "../images/other/handle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  primaryFont
} from "./GlobalStyles";

type ContactProps = {
  bottom: number;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 250px;
  height: 620px;
  width: 998px;

  @media ${desktopL} {
    height: 480px;
    width: 772px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};

  > div {
    margin-top: 0.2rem;

    @media ${desktopL} {
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
  }
`;

export const ContactHandle = styled.article<FilesProps>`
  background: url(${contactHandle}) center/cover no-repeat;
  height: 43px;
  width: 980px;
  margin: 0.5rem auto;
  cursor: grab;

  @media ${desktopL} {
    height: 33px;
    width: 759px;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 44px;
    width: 160px;

    ${disableUserShared}
    cursor: auto;

    @media ${desktopL} {
      height: 34px;
    }

    img {
      height: 33px;
      width: 33px;
      margin: 0 0.5rem;

      ${disableUserShared}

      @media ${desktopL} {
        height: 30px;
        width: 30px;
        margin: 0 0.8rem;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;
      margin: 0 0.5rem;

      @media ${desktopL} {
        font-size: 1.7rem;
        margin: 0;
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
  height: 320px;
  width: 950px;
  position: absolute;
  top: 8.3rem;
  left: 1.5rem;
  padding: 15px;
  outline: none;
  resize: none;

  @media ${desktopL} {
    font-size: 1.5rem;
    height: 240px;
    width: 720px;
    top: 6.5rem;
    padding: 10px;
  }
`;

export const ContactInput = styled.div<ContactProps>`
  position: absolute;
  left: 4rem;
  bottom: ${({ bottom }) => bottom + "rem"};

  @media ${desktopL} {
    bottom: ${({ bottom }) => bottom - 0.5}rem;

    &:first-of-type {
      bottom: ${({ bottom }) => bottom - 1.2}rem;
    }
  }

  label {
    font-size: 1.5rem;
    margin-right: 1rem;
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

    @media ${desktopL} {
      font-size: 1.5rem;
      height: 35px;
      width: 400px;
      padding: 0 5px;
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

  @media ${desktopL} {
    font-size: 1.5rem;
    height: 35px;
    width: 120px;

    bottom: ${({ bottom }) => bottom - 0.5}rem;

    &#send {
      bottom: ${({ bottom }) => bottom - 1.2}rem;
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

  @media ${desktopL} {
    top: 3.4rem;
    right: 8.5rem;
  }

  button {
    height: 44px;
    width: 47px;
    background-color: #c0c0c0;
    margin-left: 1rem;
    cursor: pointer;

    @media ${desktopL} {
      height: 32px;
      width: 36px;
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

      @media ${desktopL} {
        margin-top: -2px;
        scale: 0.8;
      }
    }
  }
`;
