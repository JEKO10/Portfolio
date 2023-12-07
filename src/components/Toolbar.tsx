import React, { useEffect, useState } from "react";

import dash from "../assets/images/other/dash.jpg";
import { Dash } from "../assets/style/Taskbar.style";
import {
  Clock,
  ToolbarContainer,
  ToolButton,
} from "../assets/style/Toolbar.style";
import { useGlobalContext } from "../context";

const Toolbar = () => {
  const { setIsOpen, isOpen } = useGlobalContext();

  const [time, setTime] = useState(new Date());
  const [clockBtnClicked, setClockBtnClicked] = useState(false);

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
    hour12: false,
  });

  return (
    <ToolbarContainer>
      <Dash src={dash} alt="dash" />
      <ToolButton
        onMouseDown={() => setClockBtnClicked(true)}
        onMouseUp={() => setClockBtnClicked(false)}
        onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
        isOpen={clockBtnClicked}
      />
      <Clock
        onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
        isOpen={clockBtnClicked}
      >
        {formattedTime}
      </Clock>
    </ToolbarContainer>
  );
};

export default Toolbar;
