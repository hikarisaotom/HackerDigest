import { useContext, useCallback } from 'react';
import { AppContext } from '../../data/store/Context';
import getFavoritesUseCase from '../../domain/useCases/favoriteNews/getFavoritesUseCase';
import { Hit } from '../../domain/interfaces/news';
import saveFavoritesUseCase from '../../domain/useCases/favoriteNews/saveFavoritesUseCase';
const useFavoritesNews = () => {
    const { state, dispatch } = useContext(AppContext);
    let { favoriteNews } = state;

    const fetchFavorites = useCallback(async () => {
        try {
            const result = await getFavoritesUseCase();
            dispatch({ type: 'setFavorites', payload: result });
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    }, [dispatch]);

    const addToFavorites = useCallback(async (newFavorite: Hit, onSuccess: () => void, onError: () => void) => {
        try {
            dispatch({ type: 'addToFavorites', payload: newFavorite });
            await saveFavoritesUseCase(favoriteNews, onSuccess, onError);
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    }, [favoriteNews, dispatch]);

    const removeFromFavorites = useCallback(async (newFavorite: Hit, onSuccess: () => void, onError: () => void) => {
        try {
            dispatch({ type: 'removeFromFavorites', payload: newFavorite });
            await saveFavoritesUseCase(favoriteNews, onSuccess, onError);
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    }, [favoriteNews, dispatch]);

    return { fetchFavorites, addToFavorites, removeFromFavorites };
};

export default useFavoritesNews;
