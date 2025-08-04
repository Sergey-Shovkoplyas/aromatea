import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

// import i18n (needs to be bundled ;))
import '@services/i18n.ts';
import './index.css';
import App from './App.tsx';
import { theme } from './assets/styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
);
