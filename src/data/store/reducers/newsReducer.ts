import { newsAction } from '../actions/newsActions';
import { NewsState } from '../types/types';

export function newsReducer(state: NewsState, action: newsAction) {
    switch (action.type) {
        case 'setArticles':
            return {
                ...state,
                news: action.payload.filter(
                    article => !state.deleteNews.some(del => del.id === article.id)
                ),
            };
        case 'setFavorites':
            return {
                ...state,
                favoriteNews: action.payload,
            };

        case 'addToFavorites':
            return {
                ...state,
                favoriteNews: [...state.favoriteNews, action.payload],
            };
        case 'removeFromFavorites':
            return {
                ...state,
                favoriteNews: state.favoriteNews.filter(article => article.id !== action.payload.id),
            };
        case 'setDeletedArticles':
            return {
                ...state,
                deleteNews: action.payload,
            };
        case 'deleteArticle':
            return {
                ...state,
                news: state.news.filter(article => article.id !== action.payload.id),
                deleteNews: [...state.deleteNews, action.payload],
            };
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
            return {
                ...state,
                notificationPreferences: action.payload,
            };
        default:
            return state;
    }
};

