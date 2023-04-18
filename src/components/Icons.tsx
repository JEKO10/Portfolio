import React from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";

const Icons = () => {
  return (
    <>
      <IconsContainer>
        <Icon iconName={about} />
        <Icon iconName={work} />
        <Icon iconName={contact} />
      </IconsContainer>
      <RecycleBin />
    </>
  );
};

export default Icons;
