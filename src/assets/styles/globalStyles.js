import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    a, button, input {
        font-family: 'Josefin Sans', sans-serif;
    }
`;
