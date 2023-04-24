import React from "react";

import { CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Time = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <section>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, time: false })} />
      Time
    </section>
  );
};

export default Time;
