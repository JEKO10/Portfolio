import React from "react";

import { TimeBtn } from "../../assets/style/Time.style";
import { useGlobalContext } from "../../utils/context";

const TimeButtons = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <article>
      <TimeBtn
        onClick={() => setIsOpen({ ...isOpen, time: false })}
        right={15.5}
      >
        OK
      </TimeBtn>
      <TimeBtn
        onClick={() => setIsOpen({ ...isOpen, time: false })}
        right={8.2}
      >
        Cancel
      </TimeBtn>
    </article>
  );
};

export default TimeButtons;
