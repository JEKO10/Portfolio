import styled, { css } from "styled-components";

import bookHandle from "../images/handles/bookHandle.jpg";
import book from "../images/modals/bookModal.jpg";
import { flexMixin } from "./GlobalStyles";

type FilesProps = {
  lastClicked?: string;
  isVisible: boolean;
};

type BookProps = {
  iconName: string;
  clickedIcon: string;
  isClicked: boolean;
};

export const BookFile = styled.section<FilesProps>`
  background: url(${book}) center/cover no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "book" ? 2 : 1)};

  article {
    position: absolute;
    top: 100px;
    left: 30px;
  }
`;

export const Book = styled.button<BookProps>`
  height: 126px;
  width: 100px;
  position: absolute;
  top: 15rem;
  left: 17rem;

  ${({ isClicked, iconName, clickedIcon }) =>
    isClicked
      ? css`
          background: url(${clickedIcon}) center/contain no-repeat;
        `
      : css`
          background: url(${iconName}) center/contain no-repeat;
        `};
  cursor: pointer;
`;

export const BookHandle = styled.div<FilesProps>`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  background: url(${bookHandle}) center/contain no-repeat;
  height: 50px;
  width: 100%;
  padding: 0 15px;
  cursor: grab;
`;

export const BookText = styled.p`
  font-size: 1.5rem;
  line-height: 40px;
  font-weight: 500;
  padding-right: 80px;
  margin-bottom: 0.5rem;
`;
