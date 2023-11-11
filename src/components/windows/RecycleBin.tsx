import React from "react";
import Draggable from "react-draggable";

import bookClicked from "../../assets/images/icons/bookClicked.png";
import book from "../../assets/images/icons/bookIcon.png";
import { Book } from "../../assets/style/Book.style";
import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import {
  RecycleBinFile,
  RecycleBinHandle,
} from "../../assets/style/RecycleBin.style";
import { useGlobalContext } from "../../context";

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
    >
      <RecycleBinFile
        onMouseDownCapture={() => setLastClicked("recycle")}
        lastClicked={lastClicked}
        isVisible={isVisible.recycle}
        data-no-select="true"
      >
        <RecycleBinHandle className="handle" isVisible={isVisible.recycle} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, recycle: false })}
          height={31}
          width={28.5}
          top={0.6}
          right={5.04}
        />
        <MaximizeBtn height={31} width={31} top={0.55} right={3.08} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, recycle: false })}
          height={30}
          width={30}
          top={0.6}
          right={0.95}
        />
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
