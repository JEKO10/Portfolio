import React from "react";

import {
  Loader,
  LoaderContainer,
  ShuttingDownScreen,
} from "../assets/style/Preloader.style";

export const ShuttingDown = () => {
  return (
    <ShuttingDownScreen>
      <LoaderContainer>
        <Loader />
        <p>Windows is shutting down.</p>
      </LoaderContainer>
    </ShuttingDownScreen>
  );
};
