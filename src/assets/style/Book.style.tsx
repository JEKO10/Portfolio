import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import bookHandle from "../images/handles/bookHandle.jpg";
import book from "../images/modals/bookModal.jpg";
import { flexMixin } from "./GlobalStyles";
import { iconsSharedStyle } from "./Icons.style";

type BookProps = {
  iconName: string;
  isClicked: boolean;
};

export const BookFile = styled.section<FilesProps>`
  background: url(${book}) center/cover no-repeat;
  position: absolute;
  height: 652px;
  width: 975px;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "book" ? 2 : 1)};

  article {
    position: absolute;
    top: 100px;
    left: 30px;
  }
`;

export const Book = styled.div<BookProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  position: absolute;
  top: 15rem;
  left: 17rem;

  cursor: pointer;

  ${iconsSharedStyle};

  p {
    color: #000;
  }
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
