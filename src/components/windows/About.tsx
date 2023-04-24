import React from "react";

import { CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const About = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <section>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, about: false })} />
      About
    </section>
  );
};

export default About;
