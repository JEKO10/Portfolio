import React from "react";

import { useGlobalContext } from "../context";
import About from "./windows/About";
import Contact from "./windows/Contact";
import RecycleBin from "./windows/RecycleBin";
import Time from "./windows/Time";
import Work from "./windows/Work";

const Files = () => {
  const { isOpen } = useGlobalContext();

  return (
    <section>
      {isOpen.about && <About />}
      {isOpen.contact && <Contact />}
      {isOpen.work && <Work />}
      {isOpen.recycle && <RecycleBin />}
      {isOpen.time && <Time />}
    </section>
  );
};

export default Files;