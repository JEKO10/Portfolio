import React, { useEffect, useRef } from "react";

import about from "../assets/images/icons/about.png";
import aboutClicked from "../assets/images/icons/aboutClicked.png";
import contact from "../assets/images/icons/contact.png";
import contactClicked from "../assets/images/icons/contactClicked.png";
import recycle from "../assets/images/icons/recycle.png";
import recycleClicked from "../assets/images/icons/recycleClicked.png";
import work from "../assets/images/icons/work.png";
import workClicked from "../assets/images/icons/workClicked.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";
import { useGlobalContext } from "../context";

const Icons = () => {
  const {
    isClicked,
    setIsClicked,
    isOpen,
    setIsOpen,
    isVisible,
    setIsVisible,
  } = useGlobalContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    iconName: string
  ) => {
    switch (event.detail) {
      case 1:
        setIsClicked({
          about: false,
          work: false,
          contact: false,
          recycle: false,
          book: false,
        });
        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true,
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

  const handleIconKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    iconName: string
  ) => {
    if (event.key === "Enter") {
      setIsOpen({ ...isOpen, [iconName]: true });
      setIsVisible({ ...isVisible, [iconName]: true });
    }
  };

  const clickOutside = (e: MouseEvent) => {
    if (!buttonRef.current?.contains(e.target as Node)) {
      setIsClicked({
        about: false,
        work: false,
        contact: false,
        recycle: false,
        book: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside, true);
  }, []);

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          clickedIcon={aboutClicked}
          isClicked={isClicked.about}
          onMouseDown={(event) => handleClick(event, "about")}
          onKeyDown={(event) => handleIconKeyDown(event, "about")}
          ref={buttonRef}
        />
        <Icon
          iconName={work}
          clickedIcon={workClicked}
          isClicked={isClicked.work}
          onMouseDown={(event) => handleClick(event, "work")}
          onKeyDown={(event) => handleIconKeyDown(event, "work")}
          ref={buttonRef}
        />
        <Icon
          iconName={contact}
          clickedIcon={contactClicked}
          isClicked={isClicked.contact}
          onMouseDown={(event) => handleClick(event, "contact")}
          onKeyDown={(event) => handleIconKeyDown(event, "contact")}
          ref={buttonRef}
        />
      </IconsContainer>
      <RecycleBin
        iconName={recycle}
        clickedIcon={recycleClicked}
        isClicked={isClicked.recycle}
        onMouseDown={(event) => handleClick(event, "recycle")}
        onKeyDown={(event) => handleIconKeyDown(event, "recycle")}
        ref={buttonRef}
      />
    </>
  );
};

export default Icons;
