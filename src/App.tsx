import React, { useEffect } from "react";

import GlobalFonts from "./assets/fonts/fonts";
import { GlobalStyles } from "./assets/style/GlobalStyles";
import { useGlobalContext } from "./context";
import Home from "./pages/Home";
import { Preloader } from "./pages/Preloader";
import ShutDown from "./pages/ShutDown";
import { ShuttingDown } from "./pages/ShuttingDown";

function App() {
  const { isShutDown, isLoading, setIsLoading, isShuttingDown } =
    useGlobalContext();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <GlobalStyles />
      <GlobalFonts />
      {isLoading ? (
        <Preloader />
      ) : isShuttingDown && !isShutDown ? (
        <ShuttingDown />
      ) : isShutDown ? (
        <ShutDown />
      ) : (
        <Home />
      )}
    </main>
  );
}

export default App;
