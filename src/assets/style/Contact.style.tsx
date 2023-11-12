import styled from "styled-components";

import contactHandle from "../images/handles/contactHandle.jpg";
import contactModal from "../images/modals/contactModal.jpg";
import inputBg from "../images/other/input.jpg";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

type InputProps = {
  bottom: number;
};

export const ContactFile = styled.section<FilesProps>`
  background: url(${contactModal}) center/contain no-repeat;
  position: absolute;
  height: 620px;
  width: 998px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "contact" ? 2 : 1)};
`;

export const ContactHandle = styled.div<FilesProps>`
  background: url(${contactHandle}) center/cover no-repeat;
  height: 57px;
  width: 100%;
  cursor: grab;
`;

export const ContactInput = styled.input<InputProps>`
  background: url(${inputBg}) center/cover no-repeat;
  font-size: 2rem;
  font-family: "w95fa", sans-serif;
  position: absolute;
  left: 12.45rem;
  bottom: ${({ bottom }) => bottom + "rem"};
  height: 47.11px;
  width: 544px;
  outline: none;
  padding: 0 10px;
`;
