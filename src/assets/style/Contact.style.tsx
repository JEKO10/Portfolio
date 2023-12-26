import styled from "styled-components";

import contactHandle from "../images/handles/contactHandle.jpg";
import contactModal from "../images/modals/contactModal.jpg";
import inputBg from "../images/other/input.jpg";
import textareaBg from "../images/other/textArea.jpg";
import { flexMixin, primaryFont } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

type InputProps = {
  bottom: number;
};

type ButtonProps = {
  background: string;
  clickedBackground: string;
  bottom: number;
  isClicked: boolean;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  height: 620px;
  width: 998px;

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
  background: url(${textareaBg}) center/cover no-repeat;
  font-size: 2rem;
  height: 320px;
  width: 950px;
  font-family: ${primaryFont};
  resize: none;
  position: absolute;
  left: 1.5rem;
  top: 8.2rem;
  outline: none;
  padding: 15px;
`;

export const ContactInput = styled.input<InputProps>`
  background: url(${inputBg}) center/cover no-repeat;
  font-size: 2rem;
  font-family: ${primaryFont};
  position: absolute;
  left: 12.45rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  height: 47.11px;
  width: 544px;
  outline: none;
  padding: 0 10px;
`;

export const ContactButton = styled.button<ButtonProps>`
  background: ${({ isClicked, background, clickedBackground }) =>
    isClicked
      ? `url(${clickedBackground}) center/contain no-repeat`
      : `url(${background}) center/contain no-repeat`};
  height: 56px;
  width: 178px;
  position: absolute;
  right: 2.15rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  cursor: pointer;
`;
