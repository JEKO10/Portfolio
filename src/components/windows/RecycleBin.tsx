import React, { useRef } from "react";
import Draggable from "react-draggable";

import book from "../../assets/images/icons/book.png";
import { Book } from "../../assets/style/Book.style";
import { Selection } from "../../assets/style/Icons.style";
import {
  RecycleBinFile,
  RecycleBinHandle
} from "../../assets/style/RecycleBin.style";
import { useGlobalContext } from "../../utils/context";
import FileLoader from "../../utils/FileLoader";
import { useLoadingTimer, useOutsideClick } from "../../utils/hooks";
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
    setIsClicked
  } = useGlobalContext();
  const bookRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoadingTimer();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      book: false
    });
  });

  return (
    <>
      <Draggable
        defaultPosition={{ x: 500, y: -450 }}
        handle=".handle"
        bounds="body"
        cancel=".handle *"
      >
        <RecycleBinFile
          onMouseDownCapture={() => setLastClicked("recycle")}
          isLoading={isLoading}
          lastClicked={lastClicked}
          isVisible={isVisible.recycle}
          data-no-select="true"
        >
          <RecycleBinHandle className="handle" isVisible={isVisible.recycle}>
            <ControlBtns iconName="recycle" />
          </RecycleBinHandle>
          <Book
            iconName={book}
            isClicked={isClicked.book}
            onMouseDown={(event) => handleClick(event)}
            onKeyDown={(event) => handleKeyDown(event)}
            ref={bookRef}
          >
            <img src={book} alt="book" />
            <Selection isClicked={isClicked.book} iconName={book} />
            <p>???</p>
          </Book>
        </RecycleBinFile>
      </Draggable>
      {isLoading && <FileLoader top={95} left={113} />}
    </>
  );
};

export default RecycleBin;
