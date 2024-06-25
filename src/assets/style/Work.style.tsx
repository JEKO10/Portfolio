import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import workHandle from "../images/handles/workHandle.jpg";
import workModal from "../images/modals/workModal.jpg";
import { flexMixin } from "./GlobalStyles";

// type ProjectProps = {
//   project: string;
//   clickedIcon: string;
//   top: number;
//   left: number;
//   width: number;
//   isClicked: boolean;
// };

type ProjectProps = {
  project: string;
  isClicked: boolean;
  top: number;
  left: number;
};

export const WorkFile = styled.section<FilesProps>`
  background: url(${workModal}) center/contain no-repeat;

  position: absolute;
  height: 652px;
  width: 755.5px;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};
`;

export const WorkHandle = styled.article<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${workHandle}) center/contain no-repeat;
  height: 42px;
  width: 100%;
  max-width: 755px;
  margin: 0 auto;
  padding: 0 15px;
  cursor: grab;

  button {
    height: 19.5px !important;
    width: 22.5px !important;
  }
`;

export const Project = styled.div<ProjectProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  position: absolute;
  top: ${({ top }) => top + "rem"};
  left: ${({ left }) => left + "rem"};

  cursor: pointer;

  img {
    height: 100px;
    width: 100px;
    /* image-rendering: pixelated; */
    margin-bottom: 0.5rem;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  p {
    font-size: 1.875rem;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
