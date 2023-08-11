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
        setIsClicked({ ...isClicked, [iconName]: true });

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

  const clickOutside = (e: MouseEvent) => {
    if (!buttonRef.current?.contains(e.target as Node)) {
      setIsClicked({
        about: false,
        work: false,
        contact: false,
        recycle: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, []);

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          clickedIcon={aboutClicked}
          isClicked={isClicked.about}
          onClick={(event) => handleClick(event, "about")}
          ref={buttonRef}
        />
        <Icon
          iconName={work}
          clickedIcon={workClicked}
          isClicked={isClicked.work}
          onClick={(event) => handleClick(event, "work")}
          ref={buttonRef}
        />
        <Icon
          iconName={contact}
          clickedIcon={contactClicked}
          isClicked={isClicked.contact}
          onClick={(event) => handleClick(event, "contact")}
          ref={buttonRef}
        />
      </IconsContainer>
      <RecycleBin
        iconName={recycle}
        clickedIcon={recycleClicked}
        isClicked={isClicked.recycle}
        onClick={(event) => handleClick(event, "recycle")}
        ref={buttonRef}
      />
    </>
  );
};

export default Icons;
