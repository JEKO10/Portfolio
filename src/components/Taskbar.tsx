import React from "react";

import dash from "../assets/images/dash.jpg";
import { Dash, Name, TaskBar } from "../assets/style/Taskbar.style";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
  time?: boolean;
};

type TaskbarType = {
  isOpen: ClickedState;
  setIsOpen: React.Dispatch<React.SetStateAction<ClickedState>>;
};

const Taskbar: React.FC<TaskbarType> = ({ setIsOpen, isOpen }) => {
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
