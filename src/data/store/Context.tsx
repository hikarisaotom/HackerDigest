import React,{ createContext, useEffect, useReducer } from 'react';
import {  NewsState } from './types/types';
import { newsReducer } from './reducers/newsReducer';
import { newsAction } from './actions/newsActions';
import Config from 'react-native-config';
import i18n from '../../locales/i18n';

const initialState: NewsState = {
  news: [],
  deleteNews: [],
  favoriteNews: [],
  loading: true,
  error: '',
  notificationPreferences: {
    sendNotifications: true,
    timeInterval: Config.DEFAULT_TIME_INTERVAL as number ?? 18000,
    articleType: 'mobile',
  },
  language: 'en',
  url:null,
};


// Create context
export const AppContext = createContext<{
  state: NewsState;
  dispatch: React.Dispatch<newsAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create context provider
export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);


  useEffect(() => {
    if (i18n.isInitialized && state.language) {
      i18n.changeLanguage(state.language);
    }
  }, [state.language]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
