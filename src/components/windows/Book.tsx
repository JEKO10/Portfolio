import React from "react";
import Draggable from "react-draggable";

import handleImg from "../../assets/images/icons/book.png";
import { BookFile, BookHandle, BookText } from "../../assets/style/Book.style";
import { useGlobalContext } from "../../utils/context";
import { useLoadingTimer } from "../../utils/hooks";
import ControlBtns from "../ControlBtns";

const Book = () => {
  const { lastClicked, isVisible, setLastClicked } = useGlobalContext();
  const { isLoading } = useLoadingTimer(1000);

  return (
    <>
      <Draggable handle=".handle" bounds="body" cancel=".handle *">
        <BookFile
          onMouseDownCapture={() => setLastClicked("book")}
          isLoading={isLoading}
          lastClicked={lastClicked}
          isVisible={isVisible.book}
          data-no-select="true"
        >
          <ControlBtns iconName="book" />
          <BookHandle className="handle" isVisible={isVisible.book}>
            <div>
              <img src={handleImg} alt="handleImg" />
              <p>General - Notepad</p>
            </div>
          </BookHandle>
          <BookText>
            <p>Site Design and Development:</p>
            <p>Development: Aleksa Bubanja - aleksa3b@gmail.com</p>
            <p>Design: Tadija Bubanja - tadija3b@gmail.com</p>
            <p>
              Special thanks to Tadija Bubanja for the visually appealing design
              elements that enhance the user experience.
            </p>
          </BookText>
        </BookFile>
      </Draggable>
    </>
  );
};

export default Book;
