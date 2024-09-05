import styled from "styled-components";

import { FilesProps } from "../../utils/context";
import book from "../images/modals/shared.jpg";
import bookSmall from "../images/modals/sharedSmall.jpg";
import bookHandle from "../images/other/handle.jpg";
import {
  desktopL,
  disableUserShared,
  flexMixin,
  laptop,
  tablet
} from "./GlobalStyles";
import { iconsSharedStyle } from "./Icons.style";

type BookProps = {
  iconName: string;
  isClicked: boolean;
};

export const BookFile = styled.section<FilesProps>`
  background: url(${book}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${desktopL} {
    height: 500px;
    width: 747px;
  }

  ${laptop} {
    height: 334px;
    width: 500px;
  }

  ${tablet} {
    background: url(${bookSmall}) center/contain no-repeat;
    height: 200px;
    width: 300px;
    left: 100px;
  }

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ lastClicked }) => (lastClicked === "book" ? 2 : 1)};
`;

export const Book = styled.div<BookProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  position: absolute;
  top: 15rem;
  left: 17rem;

  cursor: pointer;

  ${iconsSharedStyle}; /* @TODO: mozda ako ovdje stavim sherd direktno radice */

  ${desktopL} {
    top: 11.5rem;
    left: 13.5rem;
  }

  ${laptop} {
    top: 8rem;
    left: 9rem;
  }

  ${tablet} {
    top: 6.5rem;
    left: 7rem;
  }

  img {
    height: 100px;
    width: 100px;

    ${laptop} {
      height: 70px;
      width: 70px;
    }

    ${tablet} {
      height: 50px;
      width: 50px;
    }
  }

  p {
    color: ${({ isClicked }) => (isClicked ? "#fff" : "#000")};

    ${desktopL} {
      font-size: 1.6rem;
    }

    ${laptop} {
      font-size: 1.3rem;
    }

    ${tablet} {
      font-size: 1rem;
    }
  }
`;

export const BookHandle = styled.div<FilesProps>`
  background: url(${bookHandle}) center/contain no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  ${desktopL} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  ${laptop} {
    height: 20px;
    width: 492px;
  }

  ${tablet} {
    height: 18px;
    width: 282px;
    margin: 0.15rem auto;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    height: 37px;
    width: 270px;
    cursor: auto;
    ${disableUserShared}

    ${desktopL} {
      height: 29px;
    }

    ${laptop} {
      height: 18px;
      width: 160px;
    }

    ${tablet} {
      width: 140px;
    }

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;

      ${disableUserShared}

      ${desktopL} {
        height: 23px;
        width: 23px;
      }

      ${laptop} {
        height: 18px;
        width: 18px;
      }

      ${tablet} {
        height: 15px;
        width: 15px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${desktopL} {
        font-size: 1.5rem;
      }

      ${laptop} {
        font-size: 1rem;
        margin-top: 0.1rem;
      }

      ${tablet} {
        font-size: 0.9rem;
        margin-top: 0;
      }
    }
  }
`;

export const BookText = styled.article`
  position: absolute;
  top: 100px;
  left: 30px;

  ${desktopL} {
    top: 80px;
    left: 25px;
  }

  ${laptop} {
    top: 50px;
    left: 15px;
    max-height: 275px;
  }

  ${tablet} {
    top: 35px;
    left: 17px;
    max-height: 155px;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 80px;
    margin-bottom: 0.5rem;

    ${desktopL} {
      font-size: 1.2rem;
      line-height: 30px;
      margin: 0.5rem 0.2rem;
      padding-right: 30px;
    }

    ${tablet} {
      font-size: 0.8rem;
      line-height: 18px;
      margin: 0.4rem 0;
    }

    ${disableUserShared}
  }
`;
