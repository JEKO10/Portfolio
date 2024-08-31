import React from "react";

import { TimeBtn } from "../../assets/style/Time.style";
import { useGlobalContext } from "../../utils/context";
import { useResize } from "../../utils/hooks";

const TimeButtons = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const innerWidth = useResize();

  return (
    <article>
      <TimeBtn
        onClick={() => setIsOpen({ ...isOpen, time: false })}
        right={innerWidth > 992 ? 15.5 : 11}
      >
        OK
      </TimeBtn>
      <TimeBtn
        onClick={() => setIsOpen({ ...isOpen, time: false })}
        right={innerWidth > 992 ? 8.2 : 6}
      >
        Cancel
      </TimeBtn>
    </article>
  );
};

export default TimeButtons;
