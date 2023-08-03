import styled from "styled-components";

type IconName = {
  iconName: string;
  isClicked: boolean;
};

export const IconsContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
`;

export const Icon = styled.button<IconName>`
  height: 100px;
  width: 100px;
  background: ${({ iconName }) => `url(${iconName})`};
  background-blend-mode: ${({ isClicked }) =>
    isClicked ? "hard-light" : "none"};
  background-color: ${({ isClicked }) => (isClicked ? "blue" : "transparent")};
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px 15px;
  cursor: pointer;
`;

export const RecycleBin = styled.button<IconName>`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 2rem;
  right: 0;
  margin: 30px;
  background: ${({ iconName }) => `url(${iconName})`};
  background-blend-mode: ${({ isClicked }) =>
    isClicked ? "hard-light" : "none"};
  background-color: ${({ isClicked }) => (isClicked ? "blue" : "transparent")};
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;