import { createGlobalStyle } from "styled-components";

import Win98 from "./w95fa.woff";
import Win98_2 from "./w95fa.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'w95fa';
        src: local('w95fa'), local('w95fa'),
        url(${Win98}) format('woff'),
        url(${Win98_2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
