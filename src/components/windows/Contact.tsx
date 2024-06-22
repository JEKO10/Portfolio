import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import github from "../../assets/images/buttons/github.svg";
import linkedIn from "../../assets/images/buttons/linkedIn.svg";
import {
  ContactFile,
  ContactHandle,
  ContactSocials
} from "../../assets/style/Contact.style";
import { useGlobalContext } from "../../utils/context";
import ContactForm from "../ContactForm";
import ControlBtns from "../ControlBtns";
import FileLoader from "../../utils/FileLoader";

const Contact = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          <ContactHandle className="handle" isVisible={isVisible.contact}>
            <ControlBtns iconName="contact" />
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
      {isLoading && <FileLoader top={81.5} left={25} />}
    </>
  );
};

export default Contact;
