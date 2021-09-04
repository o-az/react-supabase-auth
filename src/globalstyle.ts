import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body > #root > div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
`;
