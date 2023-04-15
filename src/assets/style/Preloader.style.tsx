import styled from "styled-components";

import preloaderImg from "../images/preloader.jpg";

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url(${preloaderImg});
  background-size: cover;
  background-repeat: no-repeat;
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
