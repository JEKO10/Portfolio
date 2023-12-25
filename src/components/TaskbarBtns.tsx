import React, { useState } from "react";

import { TaskbarButton } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";

type TaskbarBtnProps = {
  iconName: string;
  imgSource: string;
};

type TaskbarBtnClicked = {
  [key: string]: boolean;
};

const TaskbarBtn: React.FC<TaskbarBtnProps> = ({ iconName, imgSource }) => {
  const { isVisible, setIsVisible } = useGlobalContext();

  const [taskbarBtnClicked, setTaskbarBtnClicked] = useState<TaskbarBtnClicked>(
    {
      about: false,
      work: false,
      contact: false,
      recycle: false,
      book: false,
      name: false,
    }
  );

  return (
    <TaskbarButton
      onMouseDown={() =>
        setTaskbarBtnClicked({ ...taskbarBtnClicked, [iconName]: true })
      }
      onClick={() => {
        setTaskbarBtnClicked({
          ...taskbarBtnClicked,
          [iconName]: false,
        });
        setIsVisible({ ...isVisible, [iconName]: !isVisible[iconName] });
      }}
      isClicked={taskbarBtnClicked[iconName]}
      iconName={iconName}
    >
      <img src={imgSource} alt="aboutMe" />
    </TaskbarButton>
  );
};

export default TaskbarBtn;
