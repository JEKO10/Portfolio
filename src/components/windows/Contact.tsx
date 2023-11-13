import React, { useState } from "react";
import Draggable from "react-draggable";

import {
  CancelButton,
  ContactFile,
  ContactHandle,
  ContactInput,
  ContactTextarea,
  SendButton,
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
            <CancelButton
              onClick={() => setIsOpen({ ...isOpen, contact: false })}
            />
            <SendButton type="submit" />
          </div>
        </article>
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
