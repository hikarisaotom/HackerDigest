import { useContext, useCallback } from 'react';
import { AppContext } from '../../data/store/Context';
import getFavoritesUseCase from '../../domain/useCases/favoriteNews/getFavoritesUseCase';
import { Article } from '../../domain/interfaces/article';
import notificationService from '../services/NotificationService';
import i18n from 'i18next';

const useFavoritesNews = () => {
    const {dispatch } = useContext(AppContext);

    const fetchFavorites = async () => {
        try {
            const result = await getFavoritesUseCase();
            dispatch({ type: 'setFavorites', payload: result });
            return result;
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
            return [];
        }
    };

    const addToFavorites = useCallback(async (newFavorite: Article, onSuccess?: () => void, onError?: () => void) => {
        try {
            let title = i18n.t('toasts.add_favorite_title');
            let message = i18n.t('toasts.add_favorite_message');
            notificationService.showSucessToast(title, message);
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
            let title = i18n.t('toasts.remove_favorite_title');
            let message = i18n.t('toasts.remove_favorite_message');
            notificationService.showInfoToast(title, message);
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
