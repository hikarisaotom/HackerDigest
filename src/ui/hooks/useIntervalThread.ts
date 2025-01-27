import { useState, useEffect, useRef } from 'react';
import getPreferenceNews from '../../domain/useCases/news/getPreferenceNews';
import notificationService from '../services/NotificationService';
import i18n from 'i18next';

interface UseIntervalThreadProps {
  message: string;
  interval: number;
  shouldRun: boolean;
}

const useIntervalThread = ({ message, interval, shouldRun }: UseIntervalThreadProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // stop the previous interval if it exists
    if (intervalRef.current) {
        console.log('[!@#]Cleaning up previous interval');
      clearInterval(intervalRef.current);
    }

    if (shouldRun) {
        console.log('[!@#]starting new interval with values: ', message, interval);
      intervalRef.current = setInterval(() => {
        //fetching information from the server
        getPreferenceNews(message).then((articles) => {
            if (articles.length > 0) {
                let article = articles[0];
                let title = article.title ;
                notificationService.showNotification(i18n.t('notifications.preference_notification'), title, article.url);
            }
        });
      }, interval);
      setIsRunning(true);
    } else {
        console.log('[!@#] background fetching stopped working');
      setIsRunning(false);
    }

    // cleanup when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [message, interval, shouldRun]);

  // stop the interval
  const stopThread = () => {
    if (intervalRef.current) {
        console.log('[!@#]Stopping interval');
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  return {
    stopThread,
    isRunning,
  };
};

export default useIntervalThread;
