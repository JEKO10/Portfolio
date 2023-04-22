import React from "react";

import About from "./files/About";
import Contact from "./files/Contact";
import RecycleBin from "./files/RecycleBin";
import Work from "./files/Work";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
};

type FilesProps = {
  isOpen: ClickedState;
};

const Files: React.FC<FilesProps> = ({ isOpen }) => {
  return (
    <section>
      {isOpen.about && <About />}
      {isOpen.contact && <Contact />}
      {isOpen.work && <Work />}
      {isOpen.recycle && <RecycleBin />}
    </section>
  );
};

export default Files;
