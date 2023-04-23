import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type WindowsState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
  time?: boolean;
};

type AppContext = {
  isClicked: WindowsState;
  setIsClicked: React.Dispatch<React.SetStateAction<WindowsState>>;
  isOpen: WindowsState;
  setIsOpen: React.Dispatch<React.SetStateAction<WindowsState>>;
};

const AppContext = createContext<AppContext>({} as AppContext);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isClicked, setIsClicked] = useState<WindowsState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
  });
  const [isOpen, setIsOpen] = useState<WindowsState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
    time: false,
  });

  return (
    <AppContext.Provider value={{ isClicked, setIsClicked, isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
