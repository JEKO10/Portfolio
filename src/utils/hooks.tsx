import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import loading from "../assets/images/other/loading.png";

export const useLoadingTimer = (delay = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.cursor = `url(${loading}), auto`;
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isLoading]);

  return { isLoading };
};

export const useWindowControls = () => {
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
    onClickControl
  };
};

type useOutsideClickCallback = () => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: useOutsideClickCallback
) => {
  const { setIsClicked } = useGlobalContext();

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);
};
