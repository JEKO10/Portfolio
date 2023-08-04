import React, { useEffect, useState } from "react";

import dash from "../assets/images/dash.jpg";
import { Dash } from "../assets/style/Taskbar.style";
import {
  Clock,
  ToolbarContainer,
  ToolButton,
} from "../assets/style/Toolbar.style";
import { useGlobalContext } from "../context";

const Toolbar = () => {
  const [time, setTime] = useState(new Date());

  const { setIsOpen, isOpen } = useGlobalContext();

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
    <ToolbarContainer
      onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
    >
      <Dash src={dash} alt="dash" />
      <ToolButton />
      <Clock>{formattedTime}</Clock>
    </ToolbarContainer>
  );
};

export default Toolbar;
