import { useContext, useCallback } from 'react';
import { AppContext } from '../../data/store/Context';
import getFavoritesUseCase from '../../domain/useCases/favoriteNews/getFavoritesUseCase';
import { Hit } from '../../domain/interfaces/news';
const useFavoritesNews = () => {
    const {dispatch } = useContext(AppContext);

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
            onSuccess();
        } catch (err) {
            onError();
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    }, [ dispatch]);

    const removeFromFavorites = useCallback(async (newFavorite: Hit, onSuccess: () => void, onError: () => void) => {
        try {
            dispatch({ type: 'removeFromFavorites', payload: newFavorite });
            onSuccess();
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
            onError();
        }
    }, [dispatch]);

    return { fetchFavorites, addToFavorites, removeFromFavorites };
};

export default useFavoritesNews;
