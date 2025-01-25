/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NewsScreen } from './screens';
import { ContextProvider } from '../data/store/Context';
import { requestNotificationPermission } from './utils/Notifications';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  useState(() => {
    requestNotificationPermission();
  }, []);

  return (
    <AppState>

      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NewsScreen />
        </GestureHandlerRootView>
      </SafeAreaView>
    </AppState>
  );
}
const AppState = ({ children }: any) => {
  return <ContextProvider>{children}</ContextProvider>;
};



export default App;
