import React from "react";

import { CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <section>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, contact: false })} />
      Contact
    </section>
  );
};

export default Contact;
