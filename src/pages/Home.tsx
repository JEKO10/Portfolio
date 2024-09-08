import React, { useState } from "react";

import { HomePage } from "../assets/style/GlobalStyles";
import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";
import { useGlobalContext } from "../utils/context";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
} from "../utils/mouseHandlers";

const Home = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [isRectangleVisible, setRectangleVisible] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const { isClicked, setIsClicked, setIsOpen, isOpen } = useGlobalContext();

  return (
    <HomePage
      className="home"
      onMouseDown={(e) =>
        handleMouseDown({
          e,
          setMouseDown,
          setRectangleVisible,
          setStartPosition,
          setEndPosition,
          isOpen,
          setIsOpen,
        })
      }
      onMouseUp={() => handleMouseUp({ setMouseDown, setRectangleVisible })}
      onMouseMove={(e) =>
        handleMouseMove({
          e,
          mouseDown,
          setEndPosition,
          startPosition,
          endPosition,
          isClicked,
          setIsClicked,
        })
      }
    >
      {isRectangleVisible && (
        <div
          style={{
            position: "absolute",
            border: "2px solid gray",
            pointerEvents: "none",
            top: `${Math.min(startPosition.y, endPosition.y)}px`,
            left: `${Math.min(startPosition.x, endPosition.x)}px`,
            width: `${Math.abs(endPosition.x - startPosition.x)}px`,
            height: `${Math.abs(endPosition.y - startPosition.y)}px`,
          }}
        ></div>
      )}
      <Icons />
      <Files />
      <Taskbar />
    </HomePage>
  );
};

export default Home;
