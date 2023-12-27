import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import {
  ClockBtn,
  ClockHandle,
  ClockModal,
  DigitalClock,
  Month,
  TimeZone,
  Year,
} from "../../assets/style/Clock.style";
import { useGlobalContext } from "../../utils/context";
import AnalogClock from "../AnalogClock";

const Time = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked } = useGlobalContext();

  const [time, setTime] = useState(new Date());
  const [timeBtnClicked, setTimeBtnClicked] = useState({
    okBtn: false,
    cancelBtn: false,
  });

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const full = time.toLocaleDateString("en-US", { timeZoneName: "long" });

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
        <article>
          <Month>{month[time.getMonth()]}</Month>
          <Year>2023</Year>
          <TimeZone>{full.slice(11)}</TimeZone>
        </article>
        <article>
          <AnalogClock />
          <DigitalClock>{formattedTime}</DigitalClock>
        </article>
        <div>
          <ClockBtn
            onMouseDown={() =>
              setTimeBtnClicked({ ...timeBtnClicked, okBtn: true })
            }
            onMouseUp={() => {
              setTimeBtnClicked({
                ...timeBtnClicked,
                okBtn: false,
              });
              setIsOpen({ ...isOpen, time: false });
            }}
            isClicked={timeBtnClicked.okBtn}
            right={15.5}
          >
            OK
          </ClockBtn>
          <ClockBtn
            onMouseDown={() =>
              setTimeBtnClicked({ ...timeBtnClicked, cancelBtn: true })
            }
            onClick={() => {
              setTimeBtnClicked({
                ...timeBtnClicked,
                cancelBtn: false,
              });
              setIsOpen({ ...isOpen, time: false });
            }}
            isClicked={timeBtnClicked.cancelBtn}
            right={8.2}
          >
            Cancel
          </ClockBtn>
        </div>
      </ClockModal>
    </Draggable>
  );
};

export default Time;
