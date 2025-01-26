import { Dispatch } from 'react';
import { newsAction } from '../actions/newsActions';
import { NotificationPreferences } from '../../../domain/interfaces/notifications';
import { Article } from '../../../domain/interfaces/article';

export type Contextprops = {
    state: NewsState;
    dispatch: Dispatch<newsAction>;
  };

  export type NewsState = {
    loading: boolean;
    error: string;
    news: Article[];
    deleteNews: Article[];
    favoriteNews: Article[];
    notificationPreferences:NotificationPreferences;
  };

