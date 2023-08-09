import React from "react";
import Draggable from "react-draggable";

import {
  CloseBtn,
  ContactFile,
  ContactHandle,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 300, y: -400 }} handle=".handle">
      <ContactFile
        onMouseDownCapture={() => setLastClicked("contact")}
        isVisible={isVisible.contact}
        lastClicked={lastClicked}
      >
        <ContactHandle className="handle">
          <MinimizeBtn
            onMouseDown={() => setIsVisible({ ...isVisible, contact: false })}
            height={32}
            width={34}
            top={0.85}
            right={5.5}
          />
          <CloseBtn
            onMouseDown={() => setIsOpen({ ...isOpen, contact: false })}
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
