import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledProvider } from 'styled-components';

import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledProvider theme={theme}> {/* styled-components theme */}
      <ThemeProvider theme={theme}> {/* MUI Theme */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledProvider>
  </StrictMode>,
)