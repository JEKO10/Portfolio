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
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

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

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();

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
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, recycle: false });
          }}
          height={22}
          width={25}
          top={0.85}
          right={5.15}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={22}
          width={25}
          top={0.85}
          right={3.25}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, recycle: false });
          }}
          height={22}
          width={25}
          top={0.85}
          right={1.1}
          isClicked={closeBtnClicked}
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
