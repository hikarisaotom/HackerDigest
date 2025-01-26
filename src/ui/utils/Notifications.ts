import { PermissionsAndroid, Platform } from 'react-native';
import notifee from '@notifee/react-native';

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
    await notifee.requestPermission();
  }
};

  const createChannel = async () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } catch (error) {}
    await notifee.createChannel(
      {
        id: 'test-channel',
        name: 'test Channel',
      },
      () => {},
    );
  };


export const showNotification =  (title: string, message: string) => {
  console.log('[!@#] Sending notification:', title, message);
    notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId: 'test-channel',
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    }).then(() => console.log('[!@#]Notification displayed.')).catch((err) => console.log('[!@#]Error displaying notification:', err));
};

