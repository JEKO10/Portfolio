import React, { useEffect } from "react";

import GlobalFonts from "./assets/fonts/fonts";
import { GlobalStyles } from "./assets/style/GlobalStyles";
import Home from "./pages/Home";
import { Preloader } from "./pages/Preloader";
import ShutDown from "./pages/ShutDown";
import { ShuttingDown } from "./pages/ShuttingDown";
import { useGlobalContext } from "./utils/context";

function App() {
  const { isShutDown, isLoading, setIsLoading, isShuttingDown } =
    useGlobalContext();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <main>
      <GlobalStyles />
      <GlobalFonts />
      {isShuttingDown && !isShutDown ? (
        <ShuttingDown />
      ) : isShutDown ? (
        <ShutDown />
      ) : (
        <div>
          {isLoading && <Preloader />}
          <Home />
        </div>
      )}
    </main>
  );
}

export default App;
