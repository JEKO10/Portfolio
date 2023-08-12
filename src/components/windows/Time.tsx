import React from "react";
import Draggable from "react-draggable";

import {
  CancelBtn,
  CloseBtn,
  MinimizeBtn,
  OkButton,
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
          <MinimizeBtn
            onMouseDown={() => setIsOpen({ ...isOpen, time: false })}
            height={19}
            width={21}
            top={0.43}
            right={3.3}
          />
          <CloseBtn
            onMouseDown={() => setIsOpen({ ...isOpen, time: false })}
            height={22}
            width={22}
            top={0.35}
            right={0.5}
          />
        </TimeHandle>
        <OkButton onMouseDown={() => setIsOpen({ ...isOpen, time: false })} />
        <CancelBtn onMouseDown={() => setIsOpen({ ...isOpen, time: false })} />
      </TimeModal>
    </Draggable>
  );
};

export default Time;
