import React from "react";
import Draggable from "react-draggable";

import bookClicked from "../../assets/images/icons/bookClicked.png";
import book from "../../assets/images/icons/bookIcon.png";
import { Book } from "../../assets/style/Book.style";
import {
  RecycleBinFile,
  RecycleBinHandle,
} from "../../assets/style/RecycleBin.style";
import { useGlobalContext } from "../../utils/context";
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

  return (
    <Draggable
      defaultPosition={{ x: 500, y: -450 }}
      handle=".handle"
      bounds="body"
      cancel=".handle *"
    >
      <RecycleBinFile
        onMouseDownCapture={() => setLastClicked("recycle")}
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
        />
      </RecycleBinFile>
    </Draggable>
  );
};

export default RecycleBin;
