import React from "react";
import Draggable from "react-draggable";

import {
  CloseBtn,
  RecycleBinFile,
  RecycleBinHandle,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const RecycleBin = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 500, y: -450 }} handle=".handle">
      <RecycleBinFile
        onMouseDownCapture={() => setLastClicked("recycle")}
        lastClicked={lastClicked}
      >
        <RecycleBinHandle className="handle">
          <CloseBtn
            onMouseDownCapture={() => setIsOpen({ ...isOpen, recycle: false })}
            height={30}
            width={30}
            top={0.6}
            right={0.9}
          />
        </RecycleBinHandle>
      </RecycleBinFile>
    </Draggable>
  );
};

export default RecycleBin;
