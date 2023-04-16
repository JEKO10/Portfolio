import styled from "styled-components";

type IconName = {
  iconName: string;
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
  background-repeat: no-repeat;
  background-size: contain;
  margin: 15px;
  cursor: pointer;
`;
