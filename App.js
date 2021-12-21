/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <AppNavContainer />
      </GlobalProvider>
    </SafeAreaProvider>
  );
};

export default App;
