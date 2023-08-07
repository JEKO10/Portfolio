import React from "react";
import Draggable from "react-draggable";

import {
  CloseBtn,
  ContactFile,
  ContactHandle,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked, isVisible } =
    useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 300, y: -400 }} handle=".handle">
      <ContactFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.contact}
        lastClicked={lastClicked}
      >
        <ContactHandle className="handle">
          <CloseBtn
            onClick={() => setIsOpen({ ...isOpen, contact: false })}
            height={33}
            width={33}
            top={0.8}
            right={0.85}
          />
        </ContactHandle>
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
