import styled from "styled-components";

import workHandle from "../images/handles/workHandle.jpg";
import project from "../images/icons/project.png";
import workModal from "../images/modals/workModal.jpg";
import { primaryFont } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

type ProjectProps = {
  top: number;
  left: number;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/contain no-repeat;

  position: absolute;
  height: 759px;
  width: 878px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.div<FilesProps>`
  background: url(${workHandle}) center/cover no-repeat;
  height: 45px;
  width: 99.99%;
  max-width: 878px;
  margin: 0 auto;
  cursor: grab;
`;

export const Project = styled.div<ProjectProps>`
  background: none;
  position: absolute;
  top: ${({ top }) => top + "rem"};
  left: ${({ left }) => left + "rem"};

  button {
    background: url(${project}) center/cover no-repeat;
    height: 100px;
    width: 100px;
    cursor: pointer;
  }

  p {
    position: absolute;
    top: 6.6rem;
    left: -0.8rem;
    font-family: ${primaryFont};
    font-size: 1.3rem;
    letter-spacing: 0.6px;
  }
`;
