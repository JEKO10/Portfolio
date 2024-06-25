import React, { useEffect, useRef } from "react";

import aboutStart from "../assets/images/buttons/aboutStart.png";
import contactStart from "../assets/images/buttons/contactStart.png";
import recycleStart from "../assets/images/buttons/recycleStart.png";
import workStart from "../assets/images/buttons/workStart.png";
import {
  Icon,
  IconsContainer,
  RecycleBin,
  Selection
} from "../assets/style/Icons.style";
import { useGlobalContext } from "../utils/context";

const Icons = () => {
  const {
    isClicked,
    setIsClicked,
    isOpen,
    setIsOpen,
    isVisible,
    setIsVisible
  } = useGlobalContext();
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    iconName: string
  ) => {
    switch (event.detail) {
      case 1:
        setIsClicked({
          about: false,
          work: false,
          contact: false,
          recycle: false,
          book: false
        });
        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true
        }));

        setIsOpen({ ...isOpen, start: false });
        break;
      case 2:
        setIsOpen({ ...isOpen, [iconName]: true });
        setIsVisible({ ...isVisible, [iconName]: true });
        setIsClicked({ ...isClicked, [iconName]: true });

        break;
      default:
        setIsClicked({ ...isClicked, [iconName]: true });

        break;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      Object.keys(isClicked).forEach((icon) => {
        if (isClicked[icon] === true) {
          setIsOpen((prev) => ({ ...prev, [icon]: true }));
          setIsVisible((prev) => ({ ...prev, [icon]: true }));
        }
      });
    }
  };

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!iconRef.current?.contains(e.target as Node)) {
        setIsClicked({
          about: false,
          work: false,
          contact: false,
          recycle: false,
          book: false
        });
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <>
      <IconsContainer>
        <Icon
          isClicked={isClicked.about}
          onMouseDown={(event) => handleClick(event, "about")}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={aboutStart} alt="aboutStart" />
          <Selection isClicked={isClicked.about} iconName={aboutStart} />
          <p>About Me</p>
        </Icon>
        <Icon
          isClicked={isClicked.work}
          onMouseDown={(event) => handleClick(event, "work")}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={workStart} alt="workStart" />
          <Selection isClicked={isClicked.work} iconName={workStart} />
          <p>My Work</p>
        </Icon>
        <Icon
          isClicked={isClicked.contact}
          onMouseDown={(event) => handleClick(event, "contact")}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={contactStart} alt="contactStart" />
          <Selection isClicked={isClicked.contact} iconName={contactStart} />
          <p>Contact</p>
        </Icon>
      </IconsContainer>
      <RecycleBin
        isClicked={isClicked.recycle}
        onMouseDown={(event) => handleClick(event, "recycle")}
        onKeyDown={(event) => handleKeyDown(event)}
        tabIndex={0}
        ref={iconRef}
      >
        <img src={recycleStart} alt="recycleStart" />
        <Selection isClicked={isClicked.recycle} iconName={recycleStart} />
        <p>Recycle Bin</p>
      </RecycleBin>
    </>
  );
};

export default Icons;
