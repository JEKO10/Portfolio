import React from "react";
import Draggable from "react-draggable";

import { ContactFile, ContactHandle } from "../../assets/style/Contact.style";
import { useGlobalContext } from "../../utils/context";
import ContactForm from "../ContactForm";
import ControlBtns from "../ControlBtns";

const Contact = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();

  return (
    <Draggable
      defaultPosition={{ x: 300, y: -500 }}
      handle=".handle"
      bounds="body"
      cancel=".handle *"
    >
      <ContactFile
        onMouseDownCapture={() => setLastClicked("contact")}
        isVisible={isVisible.contact}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <ContactHandle className="handle" isVisible={isVisible.contact}>
          <ControlBtns iconName="contact" />
        </ContactHandle>
        <ContactForm />
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
