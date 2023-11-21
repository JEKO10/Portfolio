import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import {
  ClockHandle,
  ClockModal,
  DigitalClock,
  Month,
  Year,
} from "../../assets/style/Clock.style";
import {
  CancelBtn,
  CloseBtn,
  MaximizeBtn,
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
    <Draggable
      defaultPosition={{ x: 800, y: -400 }}
      handle=".handle"
      bounds=".home"
    >
      <ClockModal
        onMouseDownCapture={() => setLastClicked("time")}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <ClockHandle className="handle" />
        <MinimizeBtn
          onMouseUp={() => setIsOpen({ ...isOpen, time: false })}
          height={19}
          width={21}
          top={0.42}
          right={3.3}
        />
        <MaximizeBtn height={21.5} width={22.5} top={0.35} right={2} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, time: false })}
          height={22}
          width={22}
          top={0.3}
          right={0.55}
        />
        <article>
          <Month>November</Month>
          <Year>2023</Year>
        </article>
        <article>
          <AnalogClock />
          <DigitalClock>{formattedTime}</DigitalClock>
        </article>
        <div>
          <CancelBtn onMouseUp={() => setIsOpen({ ...isOpen, time: false })} />
          <OkButton onMouseUp={() => setIsOpen({ ...isOpen, time: false })} />
        </div>
      </ClockModal>
    </Draggable>
  );
};

export default Time;
