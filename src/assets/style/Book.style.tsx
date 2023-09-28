import styled, { css } from "styled-components";

import book from "../images/modals/bookModal.jpg";

type FilesProps = {
  lastClicked: string;
  isVisible?: boolean;
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