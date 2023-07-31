import styled from "styled-components";

import close from "../images/close.png";
import time from "../images/timeModal.png";

export const AboutFile = styled.section``;
export const ContactFile = styled.section``;
export const WorkFile = styled.section``;

export const TimeModal = styled.section`
  background: url(${time}) center/cover no-repeat;
  height: 486px;
  width: 576px;
  position: relative;
`;

export const RecycleBinFile = styled.section``;

export const CloseBtn = styled.button`
  background: url(${close}) center/contain no-repeat;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;
