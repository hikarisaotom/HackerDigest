import notifee, { EventType } from '@notifee/react-native';
import Toast, { ToastType } from 'react-native-toast-message';

const showToast = (type: ToastType, title: string, description: string) => {
  Toast.show({
    type: type,
    text1: title,
    text2: description,
    position: 'bottom',
  });
};
const notificationService = {
  channelId: '',

  requestNotificationPermission: async () => {
    await notifee.requestPermission();

    // Create the channel and store its ID
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    notificationService.channelId = channelId;
  },

  showNotification: (title: string, message: string, url: String) => {
    notifee
      .displayNotification({
        title: title || 'Notification Title',
        body: message || 'Main body content of the notification',
        data: {
          url: url,
        },
        android: {
          channelId: !notificationService.channelId ? 'default' : notificationService.channelId,
          pressAction: {
            id: 'default',
            launchActivity: 'default',
          },
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
          if (detail?.notification?.data?.url) {
            callback(detail?.notification?.data?.url as string);
          }
          break;
      }
    });
  },
  showInfoToast: (title:string,description:string) => {
    showToast('info', title, description);
  },
  showDangerToast: (title:string,description:string) => {
    showToast('error',  title, description);
  },
  showSucessToast: (title:string,description:string) => {
    showToast('success',  title, description);
  },
};

export default notificationService;
