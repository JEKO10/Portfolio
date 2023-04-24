import React from "react";

import { CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <section>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, work: false })} />
      Work
    </section>
  );
};

export default Work;
