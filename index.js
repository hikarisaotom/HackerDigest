/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/ui/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('[!@# ]NOTIFICATION recieved:', notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});


AppRegistry.registerComponent(appName, () => App);
