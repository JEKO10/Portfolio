import React from "react";

import { TaskbarButton } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";

type TaskbarBtnProps = {
  iconName: string;
  imgSource: string;
  label: string;
};

const TaskbarBtn: React.FC<TaskbarBtnProps> = ({
  iconName,
  imgSource,
  label
}) => {
  const { isVisible, setIsVisible } = useGlobalContext();

  return (
    <TaskbarButton
      onClick={() =>
        setIsVisible({ ...isVisible, [iconName]: !isVisible[iconName] })
      }
      iconName={iconName}
    >
      {imgSource && <img src={imgSource} alt={label} />}
      <p>{label}</p>
    </TaskbarButton>
  );
};

export default TaskbarBtn;
