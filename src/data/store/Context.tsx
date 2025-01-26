import { createContext, useEffect, useReducer } from 'react';
import { Contextprops, NewsState } from './types/types';
import { newsReducer } from './reducers/newsReducer';
import { newsAction } from './actions/newsActions';
import getNotificationPreferencesUseCase from '../../domain/useCases/notifications/getNotificationPreferencesUseCase';
import useFetchNews from '../../ui/hooks/useFetchNews';
import useDeletedNews from '../../ui/hooks/useDeletedNews';
import useFavoritesNews from '../../ui/hooks/useFavoritesNews';
import backgroundService from '../../ui/services/BackgroundSyncService';
import Config from 'react-native-config';

const initialState: NewsState = {
  news: [],
  deleteNews: [],
  favoriteNews: [],
  loading: true,
  error: '',
  notificationPreferences: {
    sendNotifications: true,
    timeInterval: Config.DEFAULT_TIME_INTERVAL as number ?? 18000,
    articleType: '',
  },
};


// Create context
// export const AppContext = createContext({} as Contextprops);
//!@#
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
    // if (state.notificationPreferences) {
    //   saveNotificationPreferencesUseCase(state.notificationPreferences);
    //   let {sendNotifications,timeInterval,articleType} = state.notificationPreferences;
    //   if(sendNotifications){
    //     backgroundService.startBackgroundSync(articleType,timeInterval);
    //   }else{
    //     backgroundService.stopBackgroundSync();
    //   }
    //   console.log('[!@#] Updated notification preferences:', state.notificationPreferences);
    // }
  }, [state.notificationPreferences]);

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
