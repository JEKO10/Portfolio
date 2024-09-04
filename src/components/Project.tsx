import React, { useRef } from "react";

import project from "../assets/images/icons/project.png";
import project45x45 from "../assets/images/icons/project45x45.png";
import projectSmall from "../assets/images/icons/projectSmall.png";
import projectTablet from "../assets/images/icons/projectTablet.png";
import { Selection } from "../assets/style/Icons.style";
import { Project as Container } from "../assets/style/Work.style";
import { useOutsideClick, useResize } from "../utils/hooks";

type IsClickedKeys = "portfolio" | "moviexd" | "hiking" | "basket";

type ProjectProps = {
  top: number;
  left: number;
  alt: IsClickedKeys;
  label: string;
  link: string;
  isClicked: {
    portfolio: boolean;
    moviexd: boolean;
    hiking: boolean;
    basket: boolean;
  };
  setIsClicked: React.Dispatch<
    React.SetStateAction<{
      portfolio: boolean;
      moviexd: boolean;
      hiking: boolean;
      basket: boolean;
    }>
  >;
};

const Project: React.FC<ProjectProps> = ({
  top,
  left,
  alt,
  label,
  link,
  isClicked,
  setIsClicked,
}) => {
  const innerWidth = useResize();
  const projectRef = useRef<HTMLDivElement>(null);

  const handleClick = (iconName: IsClickedKeys) => {
    projectRef.current?.focus();

    setIsClicked({
      portfolio: false,
      moviexd: false,
      hiking: false,
      basket: false,
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true,
    }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    link: string
  ) => {
    if (event.key === "Enter") {
      window.open(link, "_blank");
    }
  };

  useOutsideClick(projectRef, () => {
    setIsClicked({
      portfolio: false,
      moviexd: false,
      hiking: false,
      basket: false,
    });
  });

  return (
    <Container
      top={top}
      left={left}
      alt={alt}
      isClicked={isClicked[alt]}
      onMouseDown={() => handleClick(`${alt}`)}
      onDoubleClick={() =>
        window.open(`https://github.com/JEKO10/${link}`, "_blank")
      }
      onKeyDown={(event) =>
        handleKeyDown(event, `https://github.com/JEKO10/${link}`)
      }
      tabIndex={0}
      ref={projectRef}
    >
      <img src={project} alt={alt} />
      <Selection
        isClicked={isClicked[alt]}
        iconName={
          innerWidth > 1440
            ? project
            : innerWidth > 992
              ? projectSmall
              : innerWidth > 768
                ? projectTablet
                : project45x45
        }
      />
      <p>{label}</p>
    </Container>
  );
};

export default Project;
