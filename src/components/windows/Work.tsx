import React from "react";
import Draggable from "react-draggable";

import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { Project, WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../context";

const Work = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable
      defaultPosition={{ x: 100, y: -430 }}
      handle=".handle"
      bounds="body"
    >
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <WorkHandle className="handle" isVisible={isVisible.work} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, work: false })}
          height={27}
          width={29}
          top={0.7}
          right={4.7}
        />
        <MaximizeBtn height={28} width={32} top={0.68} right={2.78} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, work: false })}
          height={30}
          width={30}
          top={0.6}
          right={0.68}
        />
        <article>
          <Project top={17} left={21.25}>
            <button />
            <p>WalkMate.doc</p>
          </Project>
          <Project top={17} left={34.4}>
            <button />
            <p>Moviexd.doc</p>
          </Project>
          <Project top={29.6} left={21.25}>
            <button />
            <p>Travel advisor.doc</p>
          </Project>
          <Project top={29.6} left={34.4}>
            <button />
            <p>Basket report.doc</p>
          </Project>
        </article>
      </WorkFile>
    </Draggable>
  );
};

export default Work;
