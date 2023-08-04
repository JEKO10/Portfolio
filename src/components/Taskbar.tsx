import React from "react";

import dash from "../assets/images/dash.jpg";
import { About, Dash, Name, TaskBar } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../context";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { isOpen } = useGlobalContext();

  return (
    <>
      <TaskBar>
        <div>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name />
          {isOpen.about && <About />}
        </div>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
