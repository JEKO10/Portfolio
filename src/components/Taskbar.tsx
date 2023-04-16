import React from "react";

import dash from "../assets/images/dash.jpg";
import { Dash, Name, TaskBar } from "../assets/style/Taskbar.style";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  return (
    <>
      <TaskBar>
        <div>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name />
        </div>
        <div>
          <Dash src={dash} alt="dash" />
          <Toolbar />
        </div>
      </TaskBar>
    </>
  );
};

export default Taskbar;
