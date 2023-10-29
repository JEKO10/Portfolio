import styled, { css } from "styled-components";

import bookHandle from "../images/handles/bookHandle.jpg";
import book from "../images/modals/bookModal.jpg";

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
  z-index: ${({ lastClicked }) => (lastClicked === "book" ? 2 : 1)};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const Book = styled.button<BookProps>`
  height: 126px;
  width: 100px;
  position: absolute;
  top: 16.4rem;
  left: 17.7rem;
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
  background: url(${bookHandle}) left/contain no-repeat;
  height: 50px;
  /* width: ${({ isVisible }) => (isVisible ? "100%" : "17%")}; */
  width: 975px;

  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 0)" : "translate(0, 2000%)"};
  transition: transform 200ms linear, width 100ms linear;
`;
