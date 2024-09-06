import React, { useEffect } from "react";

import GlobalFonts from "./assets/fonts/fonts";
import { GlobalStyles } from "./assets/style/GlobalStyles";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import ShutDown from "./pages/ShutDown";
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
        <Loader preloader={false} />
      ) : isShutDown ? (
        <ShutDown />
      ) : (
        <div>
          {isLoading && <Loader preloader={true} />}
          <Home />
        </div>
      )}
    </main>
  );
}

export default App;
