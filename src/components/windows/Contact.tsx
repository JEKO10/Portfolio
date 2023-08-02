import React from "react";

import { CloseBtn, ContactFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <ContactFile>
      <CloseBtn
        onClick={() => setIsOpen({ ...isOpen, contact: false })}
        height={30}
        width={30}
        top={0.7}
        right={0.8}
      />
      Contact
    </ContactFile>
  );
};

export default Contact;
