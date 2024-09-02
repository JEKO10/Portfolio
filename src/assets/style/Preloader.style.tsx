import styled from "styled-components";

import preloaderImg from "../images/other/preloader.jpg";
import { flexMixin } from "./GlobalStyles";

export const LoaderContainer = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};
  background-image: url(${preloaderImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  p {
    font-size: 2rem;
    color: #163394;
    font-weight: 700;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    user-select: none;
  }

  @media (max-width: 1200px) {
    background-position: -100px;
    background-size: 120% 100%;
  }

  @media (max-width: 768px) {
    background-position: -270px;
    background-size: 170% 100%;
  }
`;

export const Loader = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(0.25turn, transparent, #8dc9dc, transparent);

  animation: loading 800ms alternate infinite;

  @keyframes loading {
    0% {
      background-position-x: -512px;
    }
    100% {
      background-position-x: 512px;
    }
  }
`;

// export const Bios = styled.img`
//   height: 100vh;
//   width: 100vw;
//   background-size: cover;
// `;
