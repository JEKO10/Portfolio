import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export type WindowsState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
  time?: boolean;
  book: boolean;
  start?: boolean;
};

type AppContext = {
  isClicked: WindowsState;
  setIsClicked: React.Dispatch<React.SetStateAction<WindowsState>>;
  isOpen: WindowsState;
  setIsOpen: React.Dispatch<React.SetStateAction<WindowsState>>;
  lastClicked: string;
  setLastClicked: React.Dispatch<React.SetStateAction<string>>;
  isVisible: WindowsState;
  setIsVisible: React.Dispatch<React.SetStateAction<WindowsState>>;
  isShutDown: boolean;
  setIsShutDown: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContext>({} as AppContext);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isClicked, setIsClicked] = useState<WindowsState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
    book: false,
  });

  const [isOpen, setIsOpen] = useState<WindowsState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
    time: false,
    book: false,
  });

  const [lastClicked, setLastClicked] = useState<string>("");

  const [isVisible, setIsVisible] = useState<WindowsState>({
    about: true,
    work: true,
    contact: true,
    recycle: true,
    book: false,
    start: false,
  });

  const [isShutDown, setIsShutDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isClicked,
        setIsClicked,
        isOpen,
        setIsOpen,
        lastClicked,
        setLastClicked,
        isVisible,
        setIsVisible,
        isShutDown,
        setIsShutDown,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
