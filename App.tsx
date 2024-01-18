import React from 'react';
import {AppStack} from './src/routes';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStack />
    </ThemeProvider>
  );
};

export default App;
