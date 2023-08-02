import React from "react";

import { CloseBtn, WorkFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <WorkFile>
      <CloseBtn
        onClick={() => setIsOpen({ ...isOpen, work: false })}
        height={30}
        width={30}
        top={5}
        right={0.8}
      />
      Work
    </WorkFile>
  );
};

export default Work;
