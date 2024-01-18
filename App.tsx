import React from 'react';
import {AppStack} from './src/routes';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppStack />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
