import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import { PermissionsAndroid, Platform } from 'react-native';

export const requestNotificationPermission = async () => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('[!@#]Permissions granted.');
      } else {
        console.log('[!@#]Permissions denied.');
      }
    }
    createChannel();
  } else {
    PushNotification.requestPermissions();
  }
};

  const createChannel = () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } catch (error) {}
    PushNotification.createChannel(
      {
        channelId: 'test-channel',
        channelName: 'test Channel',
      },
      () => {},
    );
  };


export const showNotification = (title: string, message: string) => {
  console.log('[!@#] Sending notification:', title, message);
    if (Platform.OS === 'ios') {
      PushNotificationIOS.addNotificationRequest({
        title: '🎉' + title + ' 🎉',
        id: '1',
        body: message,
      });
    } else {
      PushNotification.localNotification({
        channelId: 'test-channel',
        title: title,
        message: message,
      });
    }
};

