import { createContext, useReducer } from 'react';
import { Contextprops, NewsState } from './types/types';
import { newsReducer } from './reducers/newsReducer';
import { newsAction } from './actions/newsActions';
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
    articleType: 'mobile',
  },
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
