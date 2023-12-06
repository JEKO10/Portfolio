import styled, { css } from "styled-components";

type IconName = {
  iconName: string;
  clickedIcon: string;
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
  height: 140px;
  width: 116px;
  ${({ isClicked, iconName, clickedIcon }) =>
    isClicked
      ? css`
          background: url(${clickedIcon}) center/contain no-repeat;
        `
      : css`
          background: url(${iconName}) center/contain no-repeat;
        `};

  margin: 20px 15px;
  cursor: pointer;
`;

export const RecycleBin = styled.button<IconName>`
  height: 140px;
  width: 116px;
  position: absolute;
  bottom: 2rem;
  right: 0;
  margin: 30px;
  ${({ isClicked, iconName, clickedIcon }) =>
    isClicked
      ? css`
          background: url(${clickedIcon}) center/contain no-repeat;
        `
      : css`
          background: url(${iconName}) center/contain no-repeat;
        `};
  cursor: pointer;
`;
