import React, { useState } from "react";
import Draggable from "react-draggable";

import cancelButton from "../../assets/images/buttons/contactCancel.jpg";
import sendButton from "../../assets/images/buttons/send.jpg";
import {
  ContactButton,
  ContactFile,
  ContactHandle,
  ContactInput,
  ContactTextarea,
} from "../../assets/style/Contact.style";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Draggable
      defaultPosition={{ x: 300, y: -500 }}
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
        <article>
          <ContactTextarea name="message" />
          <ContactInput
            bottom={6.2}
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            autoComplete="off"
          />
          <ContactInput
            bottom={1.8}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            autoComplete="off"
          />
          <div>
            <ContactButton
              type="submit"
              bottom={5.85}
              background={sendButton}
            />
            <ContactButton
              bottom={1.7}
              background={cancelButton}
              onClick={() => setIsOpen({ ...isOpen, contact: false })}
            />
          </div>
        </article>
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
