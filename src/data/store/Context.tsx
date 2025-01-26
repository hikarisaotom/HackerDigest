import { createContext, useEffect, useReducer } from 'react';
import { Contextprops, NewsState } from './types/types';
import { newsReducer } from './reducers/newsReducer';
import { newsAction } from './actions/newsActions';
import saveDeletedUseCase from '../../domain/useCases/deleteNews/saveDeletedUseCase';
import saveFavoritesUseCase from '../../domain/useCases/favoriteNews/saveFavoritesUseCase';
import saveNotificationPreferencesUseCase from '../../domain/useCases/notifications/saveNotificationPreferencesUseCase';
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
  const { fetchNews } = useFetchNews();
  const { fetchDeleted } = useDeletedNews();
  const { fetchFavorites } = useFavoritesNews();

  useEffect(() => {
    console.log('[!@#] Loading notification preferences');
    getNotificationPreferencesUseCase().then((preferences) => {
      dispatch({ type: 'setNotificationPreferences', payload: preferences });
    });

    fetchFavorites().then(() => { console.log('[!@#] FAVORITES LOADED'); });
    fetchDeleted().then(() => { console.log('[!@#] DELETED LOADED'); });
    fetchNews().then(() => { console.log('[!@#] NEWS LOADED'); });
  }, []);

  useEffect(() => {
    if (state.deleteNews) {
      saveDeletedUseCase(state.deleteNews);
      console.log('[!@#] Updated deleted articles:', state.deleteNews);
    }
  }, [state.deleteNews]);

  useEffect(() => {
    if (state.favoriteNews) {
      saveFavoritesUseCase(state.favoriteNews);
      console.log('[!@#] Updated favorite articles:', state.favoriteNews);
    }
  }, [state.favoriteNews]);

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
