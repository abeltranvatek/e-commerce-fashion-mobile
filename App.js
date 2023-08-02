import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './src/utils/navigation';
import AppRouter from './src/features/navigation/router';
import store from './src/core/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppRouter />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
