import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import {
  ContactButton,
  ContactInput,
  ContactTextarea,
} from "../assets/style/Contact.style";
import { useGlobalContext } from "../utils/context";

const ContactForm = () => {
  const { setIsOpen, isOpen } = useGlobalContext();

  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isContactElementClicked, setIsContactElementClicked] = useState({
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
    <>
      <form ref={form} onSubmit={sendEmail} onKeyPress={handleKeyPress}>
        <ContactTextarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
        />
        <ContactInput
          type="text"
          name="from_name"
          autoComplete="off"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          bottom={6.2}
        />
        <ContactInput
          type="email"
          name="email_id"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          bottom={1.8}
        />
        <ContactButton
          type="submit"
          value="Send"
          onMouseDown={() =>
            setIsContactElementClicked({
              ...isContactElementClicked,
              send: true,
            })
          }
          onClick={() => {
            setIsContactElementClicked({
              ...isContactElementClicked,
              send: false,
            });
          }}
          isClicked={isContactElementClicked.send}
          bottom={6.2}
        >
          Send
        </ContactButton>
      </form>
      <ContactButton
        onMouseDown={() =>
          setIsContactElementClicked({
            ...isContactElementClicked,
            cancel: true,
          })
        }
        onClick={() => {
          setIsContactElementClicked({
            ...isContactElementClicked,
            cancel: false,
          });
          setIsOpen({ ...isOpen, contact: false });
        }}
        isClicked={isContactElementClicked.cancel}
        bottom={1.8}
      >
        Cancel
      </ContactButton>
    </>
  );
};

export default ContactForm;
