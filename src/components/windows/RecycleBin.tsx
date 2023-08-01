import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, RecycleBinFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const RecycleBin = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <Draggable position={{ x: 500, y: -450 }}>
      <RecycleBinFile>
        <CloseBtn
          onClick={() => setIsOpen({ ...isOpen, recycle: false })}
          height={30}
          width={30}
          top={0.6}
          right={0.7}
        />
      </RecycleBinFile>
    </Draggable>
  );
};

export default RecycleBin;
