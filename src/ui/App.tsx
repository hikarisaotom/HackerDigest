/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import { ContextProvider } from '../data/store/Context';
import notificationService from './services/NotificationService';
import WebViewModal from './components/molecules/WebViewModal/WebViewModal';
import Toast from 'react-native-toast-message';
import MainNavigator from './navigation/MainNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    notificationService.requestNotificationPermission();

  }, []);
  const onNotificationPress = (url: string) => {
    setCurrentUrl(url);
    setModalVisible(true);
  };
  useEffect(() => {
      notificationService.observeNotificationsEvents(onNotificationPress);
  }, []);

  return (
    <AppState>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <GestureHandlerRootView >
        <MainNavigator />
          <WebViewModal
            visible={modalVisible}
            url={currentUrl}
            onClose={() => setModalVisible(false)}
          />
        </GestureHandlerRootView>
      <Toast />
    </AppState>
  );
}
const AppState = ({ children }: any) => {
  return <ContextProvider>{children}</ContextProvider>;
};



export default App;
