import React from "react";

import { TaskbarButton } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";

type TaskbarBtnProps = {
  iconName: string;
  imgSource: string;
};

const TaskbarBtn: React.FC<TaskbarBtnProps> = ({ iconName, imgSource }) => {
  const { isVisible, setIsVisible } = useGlobalContext();

  return (
    <TaskbarButton
      onClick={() =>
        setIsVisible({ ...isVisible, [iconName]: !isVisible[iconName] })
      }
      iconName={iconName}
    >
      <img src={imgSource} alt="aboutMe" />
    </TaskbarButton>
  );
};

export default TaskbarBtn;
