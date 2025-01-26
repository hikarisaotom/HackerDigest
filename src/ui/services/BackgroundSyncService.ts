import BackgroundService from 'react-native-background-actions';
import getPreferenceNews from '../../domain/useCases/news/getPreferenceNews';
import notificationService from './NotificationService';

const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve(), time));

const backgroundSyncTask = async (taskDataArguments?: { query: string, delay: number }) => {
    if (!taskDataArguments) {
        console.error('[!@#] No task data provided');
        return;
    }

    const { query, delay } = taskDataArguments;

    await new Promise(async (resolve) => {
        while (BackgroundService.isRunning()) {
            console.log('[!@#] Syncing articles...');
            try {
                const articles = await getPreferenceNews(query);

                // If there are articles, show notifications
                if (articles.length > 0) {
                    let article = articles[0];
                    let title = article.title ?? article.story_title ?? article.comment_text ?? '';
                    notificationService.showNotification(' 👀 we thought you might like this!', title, article.url ?? '');
                }
                await sleep(delay);
            } catch (error) {
                console.error('[!@#] Error during background sync:', error);
                break; // Stop if an error occurs
            }
        }
    });
};

const backgroundService = {
    startBackgroundSync: (query: string, delay: number) => {
        const options = {
            taskName: 'Sync Articles',
            taskTitle: 'Syncing New Articles',
            taskDesc: 'Checking for new articles from Algolia.',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            parameters: {
                query: query,
                delay: delay,
            },
        };
        if(BackgroundService.isRunning()){
            console.log('[!@#] sync already running, Stopping background sync');
            backgroundService.stopBackgroundSync();
        }
        BackgroundService.start(backgroundSyncTask, options);
        console.log('[!@#] sync started');
    },

    stopBackgroundSync: () => {
        BackgroundService.stop();
        console.log('[!@#] sync stopped');
    },
};

export default backgroundService;
