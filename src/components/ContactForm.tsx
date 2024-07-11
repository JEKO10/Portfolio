import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import {
  ContactButton,
  ContactInput,
  ContactTextarea
} from "../assets/style/Contact.style";
import { useGlobalContext } from "../utils/context";

const ContactForm = () => {
  const { setIsOpen, isOpen } = useGlobalContext();

  const form = useRef<HTMLFormElement>(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: ""
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
      userInfo.name &&
      userInfo.email &&
      userInfo.message
    ) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setUserInfo({ ...userInfo, name: "" });
          setUserInfo({ ...userInfo, email: "" });
          setUserInfo({
            ...userInfo,
            message:
              "Thank you so much for reaching out! :) \n\nI'll get back to you as soon as possible! :)"
          });

          setTimeout(() => {
            setUserInfo({
              ...userInfo,
              message: ""
            });
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
          value={userInfo.message}
          onChange={(e) => {
            setUserInfo({ ...userInfo, message: e.currentTarget.value });
          }}
        />
        <ContactInput bottom={6.2}>
          <label>Your name:</label>
          <input
            type="text"
            name="from_name"
            autoComplete="off"
            value={userInfo.name}
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.currentTarget.value });
            }}
          />
        </ContactInput>
        <ContactInput bottom={1.8}>
          <label>Your email:</label>
          <input
            type="email"
            name="email_id"
            autoComplete="off"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.currentTarget.value
              });
            }}
          />
        </ContactInput>
        <ContactButton type="submit" value="Send" bottom={6.2} id="send">
          Send
        </ContactButton>
      </form>
      <ContactButton
        onClick={() => {
          setIsOpen({ ...isOpen, contact: false });
        }}
        bottom={1.8}
      >
        Cancel
      </ContactButton>
    </>
  );
};

export default ContactForm;
