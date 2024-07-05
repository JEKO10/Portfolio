import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import bookHandle from "../images/handles/handle.jpg";
import book from "../images/modals/bookModal.jpg";
import { disableUserShared, flexMixin } from "./GlobalStyles";
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

  ${iconsSharedStyle}; /* @TODO: mozda ako ovdje stavim sherd direktno radice */

  p {
    color: ${({ isClicked }) => (isClicked ? "#fff" : "#000")};
  }
`;

export const BookHandle = styled.div<FilesProps>`
  background: url(${bookHandle}) center/contain no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 37px;
    width: 270px;
    cursor: auto;
    ${disableUserShared}

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;

      ${disableUserShared}
    }

    p {
      font-size: 1.875rem;
      color: #fff;
    }
  }
`;

export const BookText = styled.p`
  font-size: 1.5rem;
  line-height: 40px;
  font-weight: 500;
  padding-right: 80px;
  margin-bottom: 0.5rem;

  ${disableUserShared}
`;
