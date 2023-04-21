import React, { useEffect, useRef, useState } from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import recycle from "../assets/images/recycle.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
};

const Icons = () => {
  const [isClicked, setIsClicked] = useState<ClickedState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (iconName: string) => {
    setIsClicked({
      about: false,
      work: false,
      contact: false,
      recycle: false,
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true,
    }));
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, []);

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

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          isClicked={isClicked.about}
          onClick={() => handleClick("about")}
          ref={buttonRef}
        />
        <Icon
          iconName={work}
          isClicked={isClicked.work}
          onClick={() => handleClick("work")}
          ref={buttonRef}
        />
        <Icon
          iconName={contact}
          isClicked={isClicked.contact}
          onClick={() => handleClick("contact")}
          ref={buttonRef}
        />
      </IconsContainer>
      <RecycleBin
        iconName={recycle}
        isClicked={isClicked.recycle}
        onClick={() => handleClick("recycle")}
        ref={buttonRef}
      />
    </>
  );
};

export default Icons;
