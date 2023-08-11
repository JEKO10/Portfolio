import React from "react";

import { BookFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Book = () => {
  const { lastClicked, isVisible, setLastClicked } = useGlobalContext();

  return (
    <BookFile
      onMouseDownCapture={() => setLastClicked("book")}
      lastClicked={lastClicked}
      isVisible={isVisible.book}
    ></BookFile>
  );
};

export default Book;
