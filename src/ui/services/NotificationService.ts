import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import Toast, { ToastType } from 'react-native-toast-message';
import { Alert } from 'react-native';
import i18n from 'i18next';
const showToast = (type: ToastType, title: string, description: string) => {
  Toast.show({
    type: type,
    text1: title,
    text2: description,
    position: 'bottom',
  });
};
const showNoPermissions = () => {
  notificationService.showDangerToast(
    i18n.t('toasts.notifications_disabled_title'),
    i18n.t('toasts.notifications_disabled_message')
  );
}

const notificationService = {
  channelId: '',


  requestNotificationPermission: async () => {
    let status = (await notifee.getNotificationSettings()).authorizationStatus;
    if (status !== 1) {
      Alert.alert(
        i18n.t('permissions.title'),
        i18n.t('permissions.description'),
        [
          {
            text: 'No',
            onPress: () => showNoPermissions(),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: async () => {
              const permission = await notifee.requestPermission({
                alert: true,
                badge: true,
                sound: true,
              });
              if (!permission) {
                showNoPermissions();
              }
            },
          },
        ]
      );
    }
    // Create the channel and store its ID
    notificationService.channelId = await notifee.createChannel({
      id: 'hackerDigest',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      sound: 'default',
      vibration: true,
    });
  },

  showNotification: (title: string, message: string, url: String) => {
    notifee
      .displayNotification({
        title: title,
        body: message,
        data: {
          url: url ?? 'google.com',
        },
        android: {
          channelId: !notificationService.channelId ? 'hackerDigest' : notificationService.channelId,
          pressAction: {
            id: 'default',
          },
          importance: AndroidImportance.HIGH,
        },
      })
      .then(() => console.log('[DEBUG] Notification displayed.'))
      .catch((err) => console.error('[DEBUG] Error displaying notification:', err));
  },
  observeNotificationsEvents: (callback: (url: string) => void) => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          break;
        case EventType.PRESS:
          console.log('[DEBUG] Notification pressed:', detail?.notification?.data?.url);
          if (detail?.notification?.data?.url) {
            callback(detail?.notification?.data?.url as string);
          }else{
            console.log('[DEBUG] No URL found in notification data. Redirecting to google.com');
            callback('https://google.com');
          }
          break;
      }
    });
  },
  showInfoToast: (title: string, description: string) => {
    showToast('info', title, description);
  },
  showDangerToast: (title: string, description: string) => {
    showToast('error', title, description);
  },
  showSucessToast: (title: string, description: string) => {
    showToast('success', title, description);
  },
};

export default notificationService;
