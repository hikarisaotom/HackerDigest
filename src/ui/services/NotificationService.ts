import notifee, { EventType } from '@notifee/react-native';
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
const showNoPermissions =()=>{
  notificationService.showDangerToast(
    i18n.t('toasts.notifications_disabled_title'),
    i18n.t('toasts.notifications_disabled_message')
);
}

const notificationService = {
  channelId: '',


  requestNotificationPermission: async () => {
    let status = (await notifee.getNotificationSettings()).authorizationStatus;
    if(status !== 1){
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
              const permission = await notifee.requestPermission();
              if (!permission) {
                showNoPermissions();
              }
            },
          },
        ]
      );
    }
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
        title: title,
        body: message,
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
