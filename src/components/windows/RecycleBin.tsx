import React from "react";

import { CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const RecycleBin = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <section>
      <CloseBtn onClick={() => setIsOpen({ ...isOpen, recycle: false })} />
      RecycleBin
    </section>
  );
};

export default RecycleBin;
