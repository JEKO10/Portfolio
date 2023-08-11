import React from "react";
import Draggable from "react-draggable";

import bookIcon from "../../assets/images/icons/bookIcon.png";
import {
  Book,
  CloseBtn,
  MinimizeBtn,
  RecycleBinFile,
  RecycleBinHandle,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const RecycleBin = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 500, y: -450 }} handle=".handle">
      <RecycleBinFile
        onMouseDownCapture={() => setLastClicked("recycle")}
        lastClicked={lastClicked}
        isVisible={isVisible.recycle}
      >
        <RecycleBinHandle className="handle">
          <MinimizeBtn
            onMouseDown={() => setIsVisible({ ...isVisible, recycle: false })}
            height={31}
            width={28}
            top={0.55}
            right={5}
          />
          <CloseBtn
            onMouseDown={() => setIsOpen({ ...isOpen, recycle: false })}
            height={30}
            width={30}
            top={0.6}
            right={0.9}
          />
        </RecycleBinHandle>
        <Book src={bookIcon} alt="bookIcon" />
      </RecycleBinFile>
    </Draggable>
  );
};

export default RecycleBin;
