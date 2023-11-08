import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, MinimizeBtn } from "../../assets/style/Files.style";
import { WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable
      defaultPosition={{ x: 100, y: -430 }}
      handle=".handle"
      bounds="body"
    >
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <WorkHandle className="handle" isVisible={isVisible.work} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, work: false })}
          height={27}
          width={29}
          top={0.7}
          right={4.7}
        />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, work: false })}
          height={30}
          width={30}
          top={0.6}
          right={0.68}
        />
      </WorkFile>
    </Draggable>
  );
};

export default Work;
