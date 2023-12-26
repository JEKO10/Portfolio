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
  background-color: #c0c0c0;
  box-shadow: ${({ isClicked }) =>
    !isClicked
      ? `-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black;`
      : `-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white;`};
  height: 40px;
  width: 178px;
  font-size: 1.6rem;
  font-family: ${primaryFont};
  position: absolute;
  right: 2.15rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  transform: ${({ isClicked }) => (isClicked ? "translate(1px, 1px)" : "")};
  cursor: pointer;
`;
