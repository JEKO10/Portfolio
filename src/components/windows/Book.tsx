import React from "react";
import Draggable from "react-draggable";

import { BookFile, BookHandle, BookText } from "../../assets/style/Book.style";
import { useGlobalContext } from "../../utils/context";
import ControlBtns from "../ControlBtns";

const Book = () => {
  const { lastClicked, isVisible, setLastClicked } = useGlobalContext();

  return (
    <Draggable
      defaultPosition={{ x: 100, y: -400 }}
      handle=".handle"
      bounds="body"
      cancel=".handle *"
    >
      <BookFile
        onMouseDownCapture={() => setLastClicked("book")}
        lastClicked={lastClicked}
        isVisible={isVisible.book}
        data-no-select="true"
      >
        <BookHandle className="handle" isVisible={isVisible.book}>
          <ControlBtns iconName="book" />
        </BookHandle>
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
