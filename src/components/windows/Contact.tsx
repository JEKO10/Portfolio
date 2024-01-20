import React from "react";
import Draggable from "react-draggable";

import github from "../../assets/images/buttons/github.svg";
import linkedIn from "../../assets/images/buttons/linkedIn.svg";
import {
  ContactFile,
  ContactHandle,
  ContactSocials,
} from "../../assets/style/Contact.style";
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
        <ContactSocials>
          <img src={github} alt="GitHub" />
          <img src={linkedIn} alt="LinkedIn" />
        </ContactSocials>
        <ContactForm />
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
