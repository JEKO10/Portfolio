import React from "react";

import { useGlobalContext } from "../context";
import About from "./windows/About";
import Contact from "./windows/Contact";
import RecycleBin from "./windows/RecycleBin";
import Time from "./windows/Time";
import Work from "./windows/Work";

const Files = () => {
  const { isOpen, lastClicked } = useGlobalContext();

  return (
    <section>
      {isOpen.about && (
        <About
          style={{
            zIndex: lastClicked === "about" ? 2 : 1,
          }}
        />
      )}
      {isOpen.contact && <Contact />}
      {isOpen.work && <Work />}
      {isOpen.recycle && (
        <RecycleBin
          style={{
            zIndex: lastClicked === "about" ? 2 : 1,
          }}
        />
      )}
      {isOpen.time && <Time />}
    </section>
  );
};

export default Files;
