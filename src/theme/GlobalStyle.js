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
        background-color: ${({ theme }) => theme.palette.background.main};
        color: ${({ theme }) => theme.palette.text.primary};
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        min-width: 820px;
        min-height: 100vh;
    }

    #root {
        line-height: 1.5;
        font-weight: 400;

        // font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
        
    section { scroll-margin-top: 64px; }
    @media (max-width: 900px) { section { scroll-margin-top: 56px; } }
`;

export default GlobalStyle;