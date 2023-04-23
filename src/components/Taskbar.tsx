import React from "react";

import dash from "../assets/images/dash.jpg";
import { Dash, Name, TaskBar } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../context";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { setIsOpen, isOpen } = useGlobalContext();

  return (
    <>
      <TaskBar>
        <div>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name />
        </div>
        <Toolbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </TaskBar>
    </>
  );
};

export default Taskbar;
