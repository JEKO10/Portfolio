import React from "react";

import { Start } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../context";

const StartButton = () => {
  const { setIsOpen, isOpen } = useGlobalContext();

  return (
    <Start
      isOpen={isOpen.start}
      onMouseDown={() => {
        setIsOpen({ ...isOpen, start: !isOpen.start });
      }}
    />
  );
};

export default StartButton;
