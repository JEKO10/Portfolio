import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import {
  ClockHandle,
  ClockModal,
  DigitalClock,
} from "../../assets/style/Clock.style";
import {
  CancelBtn,
  CloseBtn,
  MinimizeBtn,
  OkButton,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";
import AnalogClock from "../AnalogClock";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const { isOpen, setIsOpen, lastClicked, setLastClicked } = useGlobalContext();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <Draggable defaultPosition={{ x: 800, y: -400 }} handle=".handle">
      <ClockModal
        onMouseDownCapture={() => setLastClicked("time")}
        lastClicked={lastClicked}
        className="file"
      >
        <ClockHandle className="handle" />
        <MinimizeBtn
          onMouseUp={() => setIsOpen({ ...isOpen, time: false })}
          height={19}
          width={21}
          top={0.43}
          right={3.3}
        />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, time: false })}
          height={22}
          width={22}
          top={0.35}
          right={0.5}
        />
        <DigitalClock>{formattedTime}</DigitalClock>
        <OkButton onMouseUp={() => setIsOpen({ ...isOpen, time: false })} />
        <CancelBtn onMouseUp={() => setIsOpen({ ...isOpen, time: false })} />
        <AnalogClock />
      </ClockModal>
    </Draggable>
  );
};

export default Time;
