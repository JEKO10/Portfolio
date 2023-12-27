import React, { useState } from "react";

import { TimeBtn } from "../../assets/style/Time.style";
import { useGlobalContext } from "../../utils/context";

const TimeButtons = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  const [timeBtnClicked, setTimeBtnClicked] = useState({
    okBtn: false,
    cancelBtn: false,
  });

  return (
    <article>
      <TimeBtn
        onMouseDown={() =>
          setTimeBtnClicked({ ...timeBtnClicked, okBtn: true })
        }
        onMouseUp={() => {
          setTimeBtnClicked({
            ...timeBtnClicked,
            okBtn: false,
          });
          setIsOpen({ ...isOpen, time: false });
        }}
        isClicked={timeBtnClicked.okBtn}
        right={15.5}
      >
        OK
      </TimeBtn>
      <TimeBtn
        onMouseDown={() =>
          setTimeBtnClicked({ ...timeBtnClicked, cancelBtn: true })
        }
        onClick={() => {
          setTimeBtnClicked({
            ...timeBtnClicked,
            cancelBtn: false,
          });
          setIsOpen({ ...isOpen, time: false });
        }}
        isClicked={timeBtnClicked.cancelBtn}
        right={8.2}
      >
        Cancel
      </TimeBtn>
    </article>
  );
};

export default TimeButtons;
