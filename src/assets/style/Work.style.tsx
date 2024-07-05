import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import workHandle from "../images/handles/handle.jpg";
import workModal from "../images/modals/workModal.jpg";
import { disableUserShared, flexMixin } from "./GlobalStyles";
import { iconsSharedStyle } from "./Icons.style";

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
  width: 756px;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "work" ? 2 : 1)};

  > div {
    height: 45px;
    width: 115px;

    button {
      height: 19.5px;
      width: 22.5px;
    }
  }
`;

export const WorkHandle = styled.article<FilesProps>`
  background: url(${workHandle}) center/contain no-repeat;
  height: 28px;
  width: 742px;
  margin: 0.55rem auto;
  cursor: grab;

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: 140px;

    ${disableUserShared}
    cursor: auto;

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.7rem;

      ${disableUserShared}
    }

    p {
      font-size: 1.5rem;
      color: #fff;
    }
  }
`;

export const Project = styled.div<ProjectProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  position: absolute;
  top: ${({ top }) => top + "rem"};
  left: ${({ left }) => left + "rem"};

  cursor: pointer;

  ${iconsSharedStyle}

  p {
    color: ${({ isClicked }) => (isClicked ? "#fff" : "#000")};
  }
`;
