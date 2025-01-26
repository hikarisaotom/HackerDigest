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
    let taskCanceled = false; // Flag to handle cancellation

    // Function to cancel the task
    const cancelTask = () => {
        taskCanceled = true;
    };

    // Start the syncing task
    await new Promise(async (resolve) => {
        while (BackgroundService.isRunning() && !taskCanceled) {
            console.log('[!@#] Syncing articles...');
            try {
                // Fetch articles based on the query
                const articles = await getPreferenceNews(query);

                // If there are articles, show notifications
                if (articles.length > 0) {
                    let article = articles[0];
                    let title = article.title ;
                    notificationService.showNotification(' 👀 we thought you might like this!', title, article.url);
                }
                await sleep(delay); // Wait for the specified delay before the next iteration
            } catch (error) {
                console.error('[!@#] Error during background sync:', error);
                break; // Stop if an error occurs
            }
        }
        resolve();
    });

    return cancelTask; // Return the cancel task function so it can be called from outside
};

const backgroundService = {
    cancelTask: null,  // Store cancel task reference

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

        if (BackgroundService.isRunning()) {
            console.log('[!@#] Sync already running, stopping background sync');
            backgroundService.stopBackgroundSync();
        }

        // Start background service
        BackgroundService.start(backgroundSyncTask, options).then((cancelTask) => {
            backgroundService.cancelTask = cancelTask;  // Store cancel task function
        });
        console.log('[!@#] Sync started');
    },

    stopBackgroundSync: () => {
        if (BackgroundService.isRunning()) {
            console.log('[!@#] Stopping sync');
            if (backgroundService.cancelTask) {
                backgroundService.cancelTask();  // Call the cancel task function to stop the task
                backgroundService.cancelTask = null;  // Reset the cancel task reference
            }
            BackgroundService.stop();  // Stop the background service
            console.log('[!@#] Sync stopped');
        }
    },
};

export default backgroundService;
