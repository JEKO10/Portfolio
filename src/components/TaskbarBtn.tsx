import React from "react";

import { TaskbarButton } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";
import { useResize } from "../utils/hooks";

type TaskbarBtnProps = {
  iconName: string;
  imgSource: string;
  label: string;
};

const TaskbarBtn: React.FC<TaskbarBtnProps> = ({
  iconName,
  imgSource,
  label,
}) => {
  const { isVisible, setIsVisible } = useGlobalContext();
  const innerWidth = useResize();

  return (
    <TaskbarButton
      onClick={() =>
        setIsVisible({ ...isVisible, [iconName]: !isVisible[iconName] })
      }
      iconName={iconName}
      innerWidth={innerWidth}
    >
      {imgSource && <img src={imgSource} alt={label} />}
      {innerWidth > 1200 && <p>{label}</p>}
    </TaskbarButton>
  );
};

export default TaskbarBtn;
