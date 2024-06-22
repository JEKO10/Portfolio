import styled from "styled-components";

import contactHandle from "../images/handles/contactHandle.jpg";
import contactModal from "../images/modals/contactModal.jpg";
import { flexMixin, primaryFont } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
  isLoading?: boolean;
};

type ContactProps = {
  bottom: number;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  height: 620px;
  width: 998px;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};
`;

export const ContactHandle = styled.article<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${contactHandle}) center/cover no-repeat;
  height: 57px;
  width: 100%;
  padding: 0 20px;
  cursor: grab;
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
  height: 320px;
  width: 950px;
  font-family: ${primaryFont};
  resize: none;
  position: absolute;
  left: 1.5rem;
  top: 8.3rem;
  outline: none;
  padding: 15px;
`;

export const ContactInput = styled.input<ContactProps>`
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
  position: absolute;
  left: 12.5rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  height: 47px;
  width: 544px;
  padding: 0 10px;
  outline: none;

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
  right: 10.5rem;
  top: 4.3rem;

  button {
    height: 44px;
    width: 47px;
    background-color: #c0c0c0;
    margin-left: 1rem;
    cursor: pointer;

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
      user-select: none;
      user-drag: none;
    }
  }
`;
