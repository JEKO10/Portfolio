import React, { useRef } from "react";
import Draggable from "react-draggable";

import book from "../../assets/images/icons/book.png";
import book50x50 from "../../assets/images/icons/book50x50.png";
import bookSmall from "../../assets/images/icons/bookSmall.png";
import handleImg from "../../assets/images/icons/recycle.png";
import { Book } from "../../assets/style/Book.style";
import { Selection } from "../../assets/style/Icons.style";
import {
  RecycleBinFile,
  RecycleBinHandle,
} from "../../assets/style/RecycleBin.style";
import { useGlobalContext } from "../../utils/context";
import { useLoadingTimer, useOutsideClick, useResize } from "../../utils/hooks";
import ControlBtns from "../ControlBtns";

const RecycleBin = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
    isClicked,
    setIsClicked,
  } = useGlobalContext();
  const bookRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoadingTimer();
  const innerWidth = useResize();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    bookRef.current?.focus();

    switch (event.detail) {
      case 1:
        setIsClicked({ ...isClicked, book: true });

        break;
      case 2:
        setIsOpen({ ...isOpen, book: true });
        setIsVisible({ ...isVisible, book: true });
        setIsClicked({ ...isClicked, book: true });

        break;
      default:
        setIsClicked({ ...isClicked, book: true });

        break;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      setIsOpen({ ...isOpen, book: true });
      setIsVisible({ ...isVisible, book: true });
    }
  };

  useOutsideClick(bookRef, () => {
    setIsClicked({
      about: false,
      work: false,
      contact: false,
      recycle: false,
      book: false,
    });
  });

  return (
    <>
      <Draggable handle=".handle" bounds="body" cancel=".handle *">
        <RecycleBinFile
          onMouseDownCapture={() => setLastClicked("recycle")}
          isLoading={isLoading}
          lastClicked={lastClicked}
          isVisible={isVisible.recycle}
          data-no-select="true"
        >
          <ControlBtns iconName="recycle" />
          <RecycleBinHandle className="handle" isVisible={isVisible.recycle}>
            <div>
              <img src={handleImg} alt="handleImg" />
              <p>Recycle Bin</p>
            </div>
          </RecycleBinHandle>
          <Book
            iconName={book}
            isClicked={isClicked.book}
            onMouseDown={(event) => handleClick(event)}
            onKeyDown={(event) => handleKeyDown(event)}
            ref={bookRef}
            tabIndex={0}
          >
            <img src={book} alt="book" />
            <Selection
              isClicked={isClicked.book}
              iconName={
                innerWidth < 769
                  ? book50x50
                  : innerWidth < 993
                    ? bookSmall
                    : book
              }
            />
            <p>???</p>
          </Book>
        </RecycleBinFile>
      </Draggable>
    </>
  );
};

export default RecycleBin;
