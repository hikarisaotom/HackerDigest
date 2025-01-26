import { useContext, useCallback } from 'react';
import { AppContext } from '../../data/store/Context';
import getFavoritesUseCase from '../../domain/useCases/favoriteNews/getFavoritesUseCase';
import { Article } from '../../domain/interfaces/article';
const useFavoritesNews = () => {
    const {dispatch } = useContext(AppContext);

    const fetchFavorites = async () => {
        try {
            const result = await getFavoritesUseCase();
            console.log('[DEBUG] Fetched favorites:', result);
            dispatch({ type: 'setFavorites', payload: result });
            return result;
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
            return [];
        }
    };

    const addToFavorites = useCallback(async (newFavorite: Article, onSuccess?: () => void, onError?: () => void) => {
        try {
            dispatch({ type: 'addToFavorites', payload: newFavorite });
            if(onSuccess){
                onSuccess();
            }
        } catch (err) {
            if(onError){
                onError();
            }
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    }, [ dispatch]);

    const removeFromFavorites = useCallback(async (newFavorite: Article, onSuccess?: () => void, onError?: () => void) => {
        try {
            dispatch({ type: 'removeFromFavorites', payload: newFavorite });
            if(onSuccess){
                onSuccess();
            }
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
            if(onError){
                onError();
            }
        }
    }, [dispatch]);

    return { fetchFavorites, addToFavorites, removeFromFavorites };
};

export default useFavoritesNews;
