import React from "react";
import Draggable from "react-draggable";

import { ContactFile, ContactHandle } from "../../assets/style/Contact.style";
import {
  CloseBtn,
  MaximizeBtn,
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
    <Draggable
      defaultPosition={{ x: 300, y: -400 }}
      handle=".handle"
      bounds="body"
    >
      <ContactFile
        onMouseDownCapture={() => setLastClicked("contact")}
        isVisible={isVisible.contact}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <ContactHandle className="handle" isVisible={isVisible.contact} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, contact: false })}
          height={32}
          width={34}
          top={0.85}
          right={5.4}
        />
        <MaximizeBtn height={32} width={36} top={0.85} right={3.2} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, contact: false })}
          height={35}
          width={34}
          top={0.75}
          right={0.9}
        />
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
