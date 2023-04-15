import React from "react";

import { GlobalStyles } from "./assets/style/GlobalStyles";
import Taskbar from "./components/Taskbar";
// import { Loader, Preloader } from "./assets/style/Preloader.style";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <main>
      <GlobalStyles />
      {/* {isLoading ? (
        <Preloader>
          <Loader></Loader>
        </Preloader>
      ) : (
        <h1>W</h1>
      )} */}
      <Taskbar />
    </main>
  );
}

export default App;
