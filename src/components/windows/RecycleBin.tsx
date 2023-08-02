import React from "react";
import Draggable from "react-draggable";

import { CloseBtn, RecycleBinFile } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

type RecycleBinProps = {
  style: React.CSSProperties;
};

const RecycleBin: React.FC<RecycleBinProps> = ({ style }) => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 500, y: -450 }}>
      <RecycleBinFile style={style}>
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
