import React from "react";
import Draggable from "react-draggable";

import github from "../../assets/images/buttons/github.svg";
import linkedIn from "../../assets/images/buttons/linkedIn.svg";
import handleImg from "../../assets/images/icons/contact.png";
import {
  ContactFile,
  ContactHandle,
  ContactSocials
} from "../../assets/style/Contact.style";
import { useGlobalContext } from "../../utils/context";
import { useLoadingTimer } from "../../utils/hooks";
import ContactForm from "../ContactForm";
import ControlBtns from "../ControlBtns";

const Contact = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();
  const { isLoading } = useLoadingTimer();

  return (
    <>
      <Draggable
        defaultPosition={{ x: 300, y: -500 }}
        handle=".handle"
        bounds="body"
        cancel=".handle *"
      >
        <ContactFile
          onMouseDownCapture={() => setLastClicked("contact")}
          isLoading={isLoading}
          isVisible={isVisible.contact}
          lastClicked={lastClicked}
          data-no-select="true"
        >
          <ControlBtns iconName="contact" />
          <ContactHandle className="handle" isVisible={isVisible.contact}>
            <div>
              <img src={handleImg} alt="handleImg" />
              <p>Contact</p>
            </div>
          </ContactHandle>
          <ContactSocials>
            <button>
              <a
                href="https://github.com/JEKO10"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </button>
            <button>
              <a
                href="https://linkedin.com/in/aleksa-bubanja"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </button>
          </ContactSocials>
          <ContactForm />
        </ContactFile>
      </Draggable>
    </>
  );
};

export default Contact;
