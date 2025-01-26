import notifee, { EventType } from '@notifee/react-native';

const notificationService = {
  channelId: '',

  requestNotificationPermission: async () => {
    await notifee.requestPermission();

    // Create the channel and store its ID
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    console.log('[!@#] Channel created with ID:', channelId);
    notificationService.channelId = channelId;
  },

  showNotification: (title: string, message: string, url: String) => {
    console.log('[!@#] Sending notification:', title, message);
    console.log('[!@#] Channel ID ', notificationService.channelId);
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
      .then(() => console.log('[!@#] Notification displayed.'))
      .catch((err) => console.error('[!@#] Error displaying notification:', err));
  },
  observeNotificationsEvents: (callback:(url:string)=>void) => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('[!@#] User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('[!@#] User pressed notification', detail.notification);
          if(detail?.notification?.data?.url){
            callback(detail?.notification?.data?.url as string);
          }
          break;
      }
    });
  },
};

export default notificationService;
