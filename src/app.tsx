import { ThemeProvider } from 'styled-components';
import { aliasedTheme } from './styles/themes/default';

import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { GithubContextProvider } from './contexts/GithubContext';

export function App() {
  return (
    <ThemeProvider theme={aliasedTheme}>
      <GithubContextProvider>
        <Router />
      </GithubContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
