import React from "react";

import { CloseBtn, TimeModal } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Time = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <TimeModal>
      <CloseBtn
        onClick={() => setIsOpen({ ...isOpen, time: false })}
        height={23}
        width={23}
        top={0.35}
        right={0.45}
      />
    </TimeModal>
  );
};

export default Time;
