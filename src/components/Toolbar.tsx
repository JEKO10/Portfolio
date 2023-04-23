import React, { useEffect, useState } from "react";

import dash from "../assets/images/dash.jpg";
import { Dash } from "../assets/style/Taskbar.style";
import {
  Clock,
  ToolbarContainer,
  ToolButton,
} from "../assets/style/Toolbar.style";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
  time?: boolean;
};

type ToolbarType = {
  isOpen: ClickedState;
  setIsOpen: React.Dispatch<React.SetStateAction<ClickedState>>;
};

const Toolbar: React.FC<ToolbarType> = ({ setIsOpen, isOpen }) => {
  const [time, setTime] = useState(new Date());

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
    <ToolbarContainer onClick={() => setIsOpen({ ...isOpen, time: true })}>
      <Dash src={dash} alt="dash" />
      <ToolButton />
      <Clock>{formattedTime}</Clock>
    </ToolbarContainer>
  );
};

export default Toolbar;
