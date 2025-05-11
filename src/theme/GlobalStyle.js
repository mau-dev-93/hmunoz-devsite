import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
    }

    #root {
        // font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        // color-scheme: light dark;
        // color: rgba(255, 255, 255, 0.87);
        // background-color: #242424;

        // font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;