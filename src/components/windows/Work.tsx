import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, WorkFile, WorkHandle } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked, isVisible } =
    useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 100, y: -400 }} handle=".handle">
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
      >
        <WorkHandle className="handle">
          <CloseBtn
            onClick={() => setIsOpen({ ...isOpen, work: false })}
            height={29}
            width={29}
            top={0.75}
            right={0.7}
          />
        </WorkHandle>
      </WorkFile>
    </Draggable>
  );
};

export default Work;
