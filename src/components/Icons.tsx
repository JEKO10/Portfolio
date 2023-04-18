import React, { useState } from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";

const Icons = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          isClicked={isClicked}
          onDoubleClick={() => handleClick()}
        />
        <Icon
          iconName={work}
          isClicked={isClicked}
          onDoubleClick={() => handleClick()}
        />
        <Icon
          iconName={contact}
          isClicked={isClicked}
          onDoubleClick={() => handleClick()}
        />
      </IconsContainer>
      <RecycleBin />
    </>
  );
};

export default Icons;
