import saveDeletedUseCase from '../../../domain/useCases/deleteNews/saveDeletedUseCase';
import saveFavoritesUseCase from '../../../domain/useCases/favoriteNews/saveFavoritesUseCase';
import saveNewsUseCase from '../../../domain/useCases/news/saveNewsUseCase';
import saveNotificationPreferencesUseCase from '../../../domain/useCases/notifications/saveNotificationPreferencesUseCase';
import { newsAction } from '../actions/newsActions';
import { NewsState } from '../types/types';

export function newsReducer(state: NewsState, action: newsAction) {
    switch (action.type) {
        case 'setArticles':{
            // save into local storage will not be needed since this is only called when fetchig from the api, and that use case already saves it
            return {
                ...state,
                news: action.payload.filter(
                    article => !state.deleteNews.some(del => del.id === article.id)
                ),
            };
        }
        case 'setFavorites': {
             // save into local storage will not be needed since this is only called when fetchig from the local storage
            return {
                ...state,
                favoriteNews: action.payload,
            };
        }

        case 'addToFavorites':{
            let newFavorites = [...state.favoriteNews, action.payload];
            saveFavoritesUseCase(newFavorites);
            return {
                ...state,
                favoriteNews:newFavorites ,
            };
        }
        case 'removeFromFavorites':{
            let newFavorites = state.favoriteNews.filter(article => article.id !== action.payload.id);
            saveFavoritesUseCase(newFavorites);
            return {
                ...state,
                favoriteNews: newFavorites,
            };}
        case 'setDeletedArticles':{
            // save into local storage will not be needed since this is only called when fetchig from the local storage
            let newDeleted = action.payload;
            return {
                ...state,
                deleteNews: newDeleted,
            };
        }
        case 'deleteArticle':
            {
                let newDeleted = [...state.deleteNews, action.payload];
                let newNews = state.news.filter(article => article.id !== action.payload.id);
                saveDeletedUseCase(newDeleted);
                saveNewsUseCase(newNews);
                return {
                    ...state,
                    news: newNews,
                    deleteNews: newDeleted,
                };
            }
        case 'restoreArticle': {
                let newDeleted = state.deleteNews.filter(article => article.id !== action.payload.id);
                let newNews = [...state.news, action.payload];
                saveDeletedUseCase(newDeleted);
                saveNewsUseCase(newNews);
                return {
                    ...state,
                    news: newNews,
                    deleteNews: newDeleted,
                };
            }
        case 'setLoading':
            return {
                ...state,
                loading: action.payload,
            };
        case 'setError':
            return {
                ...state,
                error: action.payload,
            };
        case 'setNotificationPreferences':
            {
                saveNotificationPreferencesUseCase(action.payload);
            return {
                ...state,
                notificationPreferences: action.payload,
            };
            }
        default:
            return state;
    }
};

