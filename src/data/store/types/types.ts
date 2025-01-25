import { Dispatch } from 'react';
import { Hit } from '../../../domain/interfaces/news';
import { newsAction } from '../actions/newsActions';
import { NotificationPreferences } from '../../../domain/interfaces/notifications';

export type Contextprops = {
    state: NewsState;
    dispatch: Dispatch<newsAction>;
  };

  export type NewsState = {
    loading: boolean;
    error: string;
    news: Hit[];
    deleteNews: Hit[];
    favoriteNews: Hit[];
    notificationPreferences:NotificationPreferences;
  };

