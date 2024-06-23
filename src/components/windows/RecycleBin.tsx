import React from "react";
import Draggable from "react-draggable";

import bookClicked from "../../assets/images/icons/bookClicked.png";
import book from "../../assets/images/icons/bookIcon.png";
import { Book } from "../../assets/style/Book.style";
import {
  RecycleBinFile,
  RecycleBinHandle
} from "../../assets/style/RecycleBin.style";
import { useGlobalContext } from "../../utils/context";
import FileLoader from "../../utils/FileLoader";
import useLoadingTimer from "../../utils/useLoadingTimer";
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

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      setIsOpen({ ...isOpen, book: true });
      setIsVisible({ ...isVisible, book: true });
    }
  };

  const { isLoading } = useLoadingTimer();

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
            clickedIcon={bookClicked}
            isClicked={isClicked.book}
            onMouseDown={(event) => handleClick(event)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </RecycleBinFile>
      </Draggable>
      {isLoading && <FileLoader top={95} left={113} />}
    </>
  );
};

export default RecycleBin;
