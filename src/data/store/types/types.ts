import { Dispatch } from 'react';
import { Hit } from '../../../domain/interfaces/news';
import { newsAction } from '../actions/newsActions';

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
  };
