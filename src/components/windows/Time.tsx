import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, TimeModal } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Time = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 800, y: -400 }}>
      <TimeModal>
        <CloseBtn
          onClick={() => setIsOpen({ ...isOpen, time: false })}
          height={23}
          width={23}
          top={0.35}
          right={0.45}
        />
      </TimeModal>
    </Draggable>
  );
};

export default Time;
