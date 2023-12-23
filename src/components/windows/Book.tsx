import React from "react";
import Draggable from "react-draggable";

import { BookFile, BookHandle, BookText } from "../../assets/style/Book.style";
import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

const Book = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    isVisible,
    setLastClicked,
    setIsVisible,
  } = useGlobalContext();

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();

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
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, book: false });
          }}
          height={22}
          width={25}
          top={0.95}
          right={5.35}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={22}
          width={25}
          top={0.95}
          right={3.25}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, book: false });
          }}
          height={22}
          width={25}
          top={0.95}
          right={1}
          isClicked={closeBtnClicked}
        />
        <article>
          <BookText>Site Design and Development: </BookText>
          <BookText>
            - Co-Design and Development: Aleksa Bubanja - aleksa3b@gmail.com
          </BookText>
          <BookText>- Design: Tadija Bubanja - tadija3b@gmail.com</BookText>
          <BookText>
            Special thanks to Tadija Bubanja for the visually appealing design
            elements that enhance the user experience, and to Aleksa Bubanja for
            the collaborative efforts in bringing the design to life through
            development.
          </BookText>
        </article>
      </BookFile>
    </Draggable>
  );
};

export default Book;
