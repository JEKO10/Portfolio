import React from "react";
import Draggable from "react-draggable";

import { BookFile, BookHandle } from "../../assets/style/Book.style";
import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Book = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    isVisible,
    setLastClicked,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable
      defaultPosition={{ x: 100, y: -400 }}
      handle=".handle"
      bounds="body"
    >
      <BookFile
        onMouseDownCapture={() => setLastClicked("book")}
        lastClicked={lastClicked}
        isVisible={isVisible.book}
        data-no-select="true"
      >
        <BookHandle className="handle" isVisible={isVisible.book} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, book: false })}
          height={28}
          width={32}
          top={0.75}
          right={5.1}
        />
        <MaximizeBtn height={30} width={34} top={0.68} right={3.05} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, book: false })}
          height={32}
          width={32.5}
          top={0.6}
          right={0.75}
        />
      </BookFile>
    </Draggable>
  );
};

export default Book;
