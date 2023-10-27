import React from "react";

import { ShutDownSection } from "../assets/style/ShutDown.style";
import { useGlobalContext } from "../context";

const ShutDown = () => {
  const { setIsShutDown, setIsLoading, setIsOpen, setIsShuttingDown } =
    useGlobalContext();

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
          setIsShuttingDown(false);
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
      />
    </ShutDownSection>
  );
};

export default ShutDown;
