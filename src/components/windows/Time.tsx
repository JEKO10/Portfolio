import React from "react";

import { CloseBtn, TimeModal } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Time = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <TimeModal>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, time: false })} />
    </TimeModal>
  );
};

export default Time;
