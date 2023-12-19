import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

import cancelClicked from "../../assets/images/buttons/cancelClicked.jpg";
import cancelButton from "../../assets/images/buttons/contactCancel.jpg";
import sendButton from "../../assets/images/buttons/send.jpg";
import sendClicked from "../../assets/images/buttons/sendClicked.jpg";
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
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

const Contact = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isContactBtnClicked, setIsContactBtnClicked] = useState({
    send: false,
    cancel: false,
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

    if (
      form.current &&
      serviceId &&
      templateId &&
      publicKey &&
      name &&
      email &&
      message
    ) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setName("");
          setEmail("");
          setMessage(
            "Thank you so much for reaching out! :) \n\nI'll get back to you as soon as possible! :)"
          );

          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendEmail(e);
    }
  };

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
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, contact: false });
          }}
          height={32}
          width={34}
          top={0.85}
          right={5.4}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={32}
          width={36}
          top={0.85}
          right={3.2}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, contact: false });
          }}
          height={35}
          width={34}
          top={0.75}
          right={0.9}
          isClicked={closeBtnClicked}
        />
        <form ref={form} onSubmit={sendEmail} onKeyPress={handleKeyPress}>
          <ContactTextarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
          <ContactInput
            bottom={6.2}
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            autoComplete="off"
          />
          <ContactInput
            bottom={1.8}
            type="email"
            name="email_id"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            autoComplete="off"
          />
          <ContactButton
            type="submit"
            bottom={5.85}
            background={sendButton}
            clickedBackground={sendClicked}
            value="Send"
            onMouseDown={() =>
              setIsContactBtnClicked({ ...isContactBtnClicked, send: true })
            }
            onClick={() => {
              setIsContactBtnClicked({
                ...isContactBtnClicked,
                send: false,
              });
            }}
            isClicked={isContactBtnClicked.send}
          />
        </form>
        <ContactButton
          bottom={1.7}
          background={cancelButton}
          clickedBackground={cancelClicked}
          onMouseDown={() =>
            setIsContactBtnClicked({ ...isContactBtnClicked, cancel: true })
          }
          onClick={() => {
            setIsContactBtnClicked({
              ...isContactBtnClicked,
              cancel: false,
            });
            setIsOpen({ ...isOpen, contact: false });
          }}
          isClicked={isContactBtnClicked.cancel}
        />
      </ContactFile>
    </Draggable>
  );
};

export default Contact;
