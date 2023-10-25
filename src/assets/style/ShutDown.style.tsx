import styled from "styled-components";

import turnOn from "../images/buttons/turnOn.png";
import { flexMixin } from "./GlobalStyles";

export const ShutDownSection = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: #000;
  height: 100vh;
  width: 100vw;

  button {
    background: url(${turnOn}) center/contain no-repeat;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }
`;
