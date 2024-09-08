// Home.tsx

import { WindowsState } from "./context";

type IconsType = {
  [key: string]: {
    y: number;
    x: number;
    height: number;
    width: number;
  };
};

type MouseDownProps = {
  e: React.MouseEvent<HTMLElement>;
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
  setRectangleVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setStartPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  setEndPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  isOpen: WindowsState;
  setIsOpen: React.Dispatch<React.SetStateAction<WindowsState>>;
};

type MouseMoveProps = {
  e: React.MouseEvent<HTMLElement>;
  mouseDown: boolean;
  setEndPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  startPosition: {
    x: number;
    y: number;
  };
  endPosition: {
    x: number;
    y: number;
  };
  isClicked: WindowsState;
  setIsClicked: React.Dispatch<React.SetStateAction<WindowsState>>;
};

const iconsSize = {
  about: {
    height: window.innerWidth > 992 ? 140 : window.innerWidth > 480 ? 99 : 75,
    width: window.innerWidth > 992 ? 116 : window.innerWidth > 480 ? 95 : 80,
  },
  work: {
    height: window.innerWidth > 992 ? 140 : window.innerWidth > 480 ? 99 : 75,
    width: window.innerWidth > 992 ? 116 : window.innerWidth > 480 ? 90 : 75,
  },
  contact: {
    height: window.innerWidth > 992 ? 140 : window.innerWidth > 480 ? 99 : 75,
    width: window.innerWidth > 992 ? 116 : window.innerWidth > 480 ? 80 : 70,
  },
  recycle: {
    height: window.innerWidth > 992 ? 136 : window.innerWidth > 480 ? 100 : 75,
    width: window.innerWidth > 992 ? 147 : window.innerWidth > 480 ? 110 : 96,
    x: window.innerWidth > 480 ? 30 : 20,
    y: window.innerWidth > 480 ? 72 : 70,
  },
};

const icons: IconsType = {
  about: {
    x: window.innerWidth > 480 ? 30 : 20,
    y: window.innerWidth > 480 ? 30 : 20,
    height: iconsSize.about.height,
    width: iconsSize.about.width,
  },
  work: {
    x: window.innerWidth > 480 ? 30 : 20,
    y: window.innerWidth > 992 ? 195 : window.innerWidth > 480 ? 160 : 125,
    height: iconsSize.work.height,
    width: iconsSize.work.width,
  },
  contact: {
    x: window.innerWidth > 480 ? 30 : 15,
    y: window.innerWidth > 992 ? 360 : window.innerWidth > 480 ? 290 : 230,
    height: iconsSize.contact.height,
    width: iconsSize.contact.width,
  },
  recycle: {
    x: window.innerWidth - iconsSize.recycle.x - iconsSize.recycle.width,
    y: window.innerHeight - iconsSize.recycle.y - iconsSize.recycle.height,
    height: iconsSize.recycle.height,
    width: iconsSize.recycle.width,
  },
};

export const handleMouseUp = ({
  setMouseDown,
  setRectangleVisible,
}: {
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
  setRectangleVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  setMouseDown(false);
  setRectangleVisible(false);
};

export const handleMouseDown = ({
  e,
  setMouseDown,
  setRectangleVisible,
  setStartPosition,
  setEndPosition,
  isOpen,
  setIsOpen,
}: MouseDownProps) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const isInsideElement = (e.target as HTMLElement).closest(
    "[data-no-select='true']"
  );

  if (isInsideElement) {
    return;
  }

  for (const iconKey in icons) {
    const icon = icons[iconKey];

    const isInsideIcon =
      clickX >= icon.x &&
      clickX <= icon.x + icon.width &&
      clickY >= icon.y &&
      clickY <= icon.y + icon.height;

    if (isInsideIcon) {
      return;
    }
  }

  e.preventDefault();

  setMouseDown(true);
  setRectangleVisible(true);
  setStartPosition({ x: clickX, y: clickY });
  setEndPosition({ x: clickX, y: clickY });
  setIsOpen({ ...isOpen, start: false });
};

export const handleMouseMove = ({
  e,
  mouseDown,
  setEndPosition,
  startPosition,
  endPosition,
  isClicked,
  setIsClicked,
}: MouseMoveProps) => {
  if (mouseDown) {
    setEndPosition({ x: e.clientX, y: e.clientY });

    const rectangle = {
      x: Math.min(startPosition.x, endPosition.x),
      y: Math.min(startPosition.y, endPosition.y),
      width: Math.abs(endPosition.x - startPosition.x),
      height: Math.abs(endPosition.y - startPosition.y),
    };

    const selectedIcons: { [key: string]: boolean } = {};

    for (const iconKey in icons) {
      const icon = icons[iconKey];

      const isIntersecting =
        icon.x < rectangle.x + rectangle.width &&
        icon.x + icon.width > rectangle.x &&
        icon.y < rectangle.y + rectangle.height &&
        icon.y + icon.height > rectangle.y;

      if (isIntersecting) {
        selectedIcons[iconKey] = true;
      } else {
        selectedIcons[iconKey] = false;
      }
    }

    setIsClicked({ ...isClicked, ...selectedIcons });
  }
};

// Icons.tsx

export const handleClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  iconName: string,
  iconRef: React.RefObject<HTMLDivElement>,
  isClicked: WindowsState,
  setIsClicked: React.Dispatch<React.SetStateAction<WindowsState>>,
  isOpen: WindowsState,
  setIsOpen: React.Dispatch<React.SetStateAction<WindowsState>>,
  isVisible: WindowsState,
  setIsVisible: React.Dispatch<React.SetStateAction<WindowsState>>
) => {
  iconRef.current?.focus();

  switch (event.detail) {
    case 1:
      setIsClicked({
        about: false,
        work: false,
        contact: false,
        recycle: false,
        book: false,
      });
      setIsClicked((prevState) => ({
        ...prevState,
        [iconName]: true,
      }));

      setIsOpen({ ...isOpen, start: false });
      break;
    case 2:
      setIsOpen({ ...isOpen, [iconName]: true });
      setIsVisible({ ...isVisible, [iconName]: true });
      setIsClicked({ ...isClicked, [iconName]: true });

      break;
    default:
      setIsClicked({ ...isClicked, [iconName]: true });

      break;
  }
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  isClicked: WindowsState,
  setIsOpen: React.Dispatch<React.SetStateAction<WindowsState>>,
  setIsVisible: React.Dispatch<React.SetStateAction<WindowsState>>
) => {
  if (event.key === "Enter") {
    Object.keys(isClicked).forEach((icon) => {
      if (isClicked[icon] === true) {
        setIsOpen((prev) => ({ ...prev, [icon]: true }));
        setIsVisible((prev) => ({ ...prev, [icon]: true }));
      }
    });
  }
};
