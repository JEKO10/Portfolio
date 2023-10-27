import React from "react";

// import bios from "../assets/images/bios.jpg";
import { Loader, LoaderContainer } from "../assets/style/Preloader.style";

export const Preloader = () => {
  return (
    <>
      {/* <Bios src={bios} alt="BIOS" /> */}
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </>
  );
};
