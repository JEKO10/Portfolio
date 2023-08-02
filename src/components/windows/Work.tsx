import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, WorkFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 100, y: -400 }}>
      <WorkFile>
        <CloseBtn
          onClick={() => setIsOpen({ ...isOpen, work: false })}
          height={30}
          width={30}
          top={0.7}
          right={0.8}
        />
        Work
      </WorkFile>
    </Draggable>
  );
};

export default Work;
