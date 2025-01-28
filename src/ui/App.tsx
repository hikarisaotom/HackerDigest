/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ContextProvider } from '../data/store/Context';
import notificationService from './services/NotificationService';
import Toast from 'react-native-toast-message';
import MainNavigator from './navigation/MainNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    notificationService.requestNotificationPermission();

  }, []);
  return (
    <AppState>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <GestureHandlerRootView >
        <MainNavigator />
        </GestureHandlerRootView>
      <Toast />
    </AppState>
  );
}
const AppState = ({ children }: any) => {
  return <ContextProvider>{children}</ContextProvider>;
};



export default App;