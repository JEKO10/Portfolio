import React from "react";

import { ShutDownSection } from "../assets/style/ShutDown.style";
import { useGlobalContext } from "../context";

const ShutDown = () => {
  const { setIsShutDown, setIsLoading, setIsOpen } = useGlobalContext();

  const handleLoader = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <ShutDownSection>
      <button
        onClick={() => {
          setIsShutDown(false);
          handleLoader();
          setIsOpen({
            about: false,
            work: false,
            contact: false,
            recycle: false,
            time: false,
            book: false,
          });
        }}
      >
        Turn on
      </button>
    </ShutDownSection>
  );
};

export default ShutDown;
