import { useState } from "react";

const useWindowControls = () => {
  const [minimizeBtnClicked, setMinimizeBtnClicked] = useState(false);
  const [maximizeBtnClicked, setMaximizeBtnClicked] = useState(false);
  const [closeBtnClicked, setCloseBtnClicked] = useState(false);

  const onMouseDownControl = (controlBtn: string) => {
    switch (controlBtn) {
      case "min":
        setMinimizeBtnClicked(true);
        break;
      case "max":
        setMaximizeBtnClicked(true);
        break;
      case "close":
        setCloseBtnClicked(true);
        break;
      default:
        return;
    }
  };

  const onClickControl = (controlBtn: string) => {
    switch (controlBtn) {
      case "min":
        setMinimizeBtnClicked(false);
        break;
      case "max":
        setMaximizeBtnClicked(false);
        break;
      case "close":
        setCloseBtnClicked(false);
        break;
      default:
        return;
    }
  };

  return {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  };
};

export default useWindowControls;
