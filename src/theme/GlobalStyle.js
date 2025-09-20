import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* ===== Base reset */
  *, *::before, *::after { box-sizing: border-box; min-width: 0; }

  /* ===== Tipo fluida + color-scheme del tema */
  html {
    -webkit-text-size-adjust: 100%;
    color-scheme: ${({ theme }) => theme.palette.mode};
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* ===== Alturas AppBar (úsalas en Drawer/section) */
  :root {
    --appbar-height-xs: 56px;
    --appbar-height-md: 64px;
  }

  html, body, #root { height: 100%; }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography?.fontFamily || "Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif"};
  }

  #root {
    isolation: isolate; /* evita conflictos de z-index */
    font-weight: 400;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ===== Medios fluidos */
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    max-width: 100%;
    /* height: auto; */
  }

  /* ===== Formularios heredan tipografía */
  button, input, textarea, select {
    font: inherit;
    color: inherit;
    background: transparent;
  }

  /* ===== Links */
  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  /* ===== Offset para anclas bajo AppBar */
  section { scroll-margin-top: var(--appbar-height-xs); }
  @media (min-width: 900px) {
    section { scroll-margin-top: var(--appbar-height-md); }
  }

  /* ===== Accesibilidad: focus visible */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
    outline-offset: 2px;
  }

  i[class^="ri-"], i[class*=" ri-"] { line-height: 1; }
`;

export default GlobalStyle;