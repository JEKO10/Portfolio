import React, { useState } from "react";

// import aboutClicked from "../assets/images/icons/aboutClicked.png";
// import contactClicked from "../assets/images/icons/contactClicked.png";
// import workClicked from "../assets/images/icons/workClicked.png";
import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";
import { useGlobalContext } from "../context";

type IconsType = {
  [key: string]: {
    y: number;
    x: number;
    height: number;
    width: number;
  };
};

const Home = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [isRectangleVisible, setRectangleVisible] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const { isClicked, setIsClicked } = useGlobalContext();

  const handleMouseUp = () => {
    setMouseDown(false);
    setRectangleVisible(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setMouseDown(true);
    setRectangleVisible(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
    setEndPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (mouseDown) {
      setEndPosition({ x: e.clientX, y: e.clientY });

      const icons: IconsType = {
        about: {
          y: 35,
          x: 30,
          height: 140,
          width: 116,
        },
        work: {
          y: 215,
          x: 30,
          height: 140,
          width: 116,
        },
        contact: {
          y: 395,
          x: 30,
          height: 140,
          width: 116,
        },
        recycle: {
          y: 729,
          x: 1774,
          height: 140,
          width: 116,
        },
      };

      const rectangle = {
        x: Math.min(startPosition.x, endPosition.x),
        y: Math.min(startPosition.y, endPosition.y),
        width: Math.abs(endPosition.x - startPosition.x),
        height: Math.abs(endPosition.y - startPosition.y),
      };

      const selectedIcons: { [key: string]: boolean } = {};

      for (const iconKey in icons) {
        const icon = icons[iconKey];
        const isIntersecting =
          icon.x < rectangle.x + rectangle.width &&
          icon.x + icon.width > rectangle.x &&
          icon.y < rectangle.y + rectangle.height &&
          icon.y + icon.height > rectangle.y;

        if (isIntersecting) {
          selectedIcons[iconKey] = true;
        }
      }

      setIsClicked({ ...isClicked, ...selectedIcons });
    }
  };

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
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
    </section>
  );
};

export default Home;
// target.style.background = `url(${aboutClicked}) center/contain no-repeat`;

// const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//   if (mouseDown) {
//     const target = e.target;

//     setEndPosition({ x: e.clientX, y: e.clientY });

//     if (
//       target instanceof HTMLElement &&
//       target.tagName.toLowerCase() === "button"
//     ) {
//       if (target.classList.contains("llyCgC")) {
//         setIsClicked({ ...isClicked, about: true });
//       } else if (target.classList.contains("faIjsa")) {
//         setIsClicked({ ...isClicked, work: true });
//       } else if (target.classList.contains("jwftwX")) {
//         setIsClicked({ ...isClicked, contact: true });
//       }
//     }
//   }
// };
