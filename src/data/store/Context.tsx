import { createContext, useEffect, useReducer } from 'react';
import { Contextprops, NewsState } from './types/types';
import { newsReducer } from './reducers/newsReducer';
import { newsAction } from './actions/newsActions';
import saveDeletedUseCase from '../../domain/useCases/deleteNews/saveDeletedUseCase';
import saveFavoritesUseCase from '../../domain/useCases/favoriteNews/saveFavoritesUseCase';

const initialState:NewsState = {
    news: [],
    deleteNews: [],
    favoriteNews: [],
    loading:true,
    error:'',
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
      saveDeletedUseCase(state.deleteNews);
      console.log('[!@#] Updated deleted articles:', state.deleteNews);
    }, [state.deleteNews]);

    useEffect(() => {
      saveFavoritesUseCase(state.favoriteNews);
      console.log('[!@#] Updated favorite articles:', state.favoriteNews);
    }, [state.favoriteNews]);

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
