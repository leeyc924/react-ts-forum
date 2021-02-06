import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Routes from './routes/routes';

const theme = {
  bodyBg: '#f4f5f6',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
