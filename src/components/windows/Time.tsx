import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import {
  ClockHandle,
  ClockModal,
  DigitalClock,
  Month,
  TimeZone,
  Year,
} from "../../assets/style/Clock.style";
import {
  CancelBtn,
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
  OkButton,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";
import AnalogClock from "../AnalogClock";

const Time = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked } = useGlobalContext();

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();

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

  const full = time.toLocaleDateString(undefined, { timeZoneName: "long" });

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
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsOpen({ ...isOpen, time: false });
          }}
          height={19}
          width={21}
          top={0.42}
          right={3.3}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={21.5}
          width={22.5}
          top={0.35}
          right={2}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, time: false });
          }}
          height={22}
          width={22}
          top={0.3}
          right={0.55}
          isClicked={closeBtnClicked}
        />
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
          <CancelBtn
            onMouseDown={() =>
              setTimeBtnClicked({ ...timeBtnClicked, okBtn: true })
            }
            onClick={() => {
              setTimeBtnClicked({
                ...timeBtnClicked,
                okBtn: false,
              });
              setIsOpen({ ...isOpen, time: false });
            }}
            isClicked={timeBtnClicked.okBtn}
          />
          <OkButton
            onMouseDown={() =>
              setTimeBtnClicked({ ...timeBtnClicked, cancelBtn: true })
            }
            onMouseUp={() => {
              setTimeBtnClicked({
                ...timeBtnClicked,
                cancelBtn: false,
              });
              setIsOpen({ ...isOpen, time: false });
            }}
            isClicked={timeBtnClicked.cancelBtn}
          />
        </div>
      </ClockModal>
    </Draggable>
  );
};

export default Time;
