import styled, { css } from "styled-components";

import workHandle from "../images/handles/workHandle.jpg";
import workModal from "../images/modals/workModal.jpg";
import { flexMixin } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

type ProjectProps = {
  project: string;
  clickedIcon: string;
  top: number;
  left: number;
  width: number;
  isClicked: boolean;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/contain no-repeat;

  position: absolute;
  height: 652px;
  width: 755.5px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.article<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${workHandle}) center/contain no-repeat;
  height: 43px;
  width: 100%;
  max-width: 756px;
  margin: 0 auto;
  padding: 0 15px;
  cursor: grab;

  button {
    height: 19px !important;
    width: 22px !important;
  }
`;

export const Project = styled.button<ProjectProps>`
  ${({ isClicked, project, clickedIcon }) =>
    isClicked
      ? css`
          background: url(${clickedIcon}) center/cover no-repeat;
        `
      : css`
          background: url(${project}) center/cover no-repeat;
        `};
  height: 133px;
  width: ${({ width }) => width + "px"};
  cursor: pointer;
  position: absolute;
  top: ${({ top }) => top + "rem"};
  left: ${({ left }) => left + "rem"};
`;
