import React from "react";
import Draggable from "react-draggable";

import {
  CloseBtn,
  TimeHandle,
  TimeModal,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Time = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 800, y: -400 }} handle=".handle">
      <TimeModal
        onMouseDownCapture={() => setLastClicked("time")}
        lastClicked={lastClicked}
      >
        <TimeHandle className="handle">
          <CloseBtn
            onMouseDownCapture={() => setIsOpen({ ...isOpen, time: false })}
            height={22}
            width={22}
            top={0.15}
            right={0.15}
          />
        </TimeHandle>
      </TimeModal>
    </Draggable>
  );
};

export default Time;
