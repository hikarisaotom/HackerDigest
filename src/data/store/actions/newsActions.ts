import { NotificationPreferences } from '../../../domain/interfaces/notifications';
import { Article } from '../../../domain/interfaces/article';

export type newsAction =
    | { type: 'setArticles'; payload: Article[] }
    | { type: 'addToFavorites'; payload: Article }
    | { type: 'removeFromFavorites'; payload: Article }
    | { type: 'setFavorites'; payload: Article[] }
    | { type: 'deleteArticle'; payload: Article }
    | {type: 'restoreArticle'; payload: Article}
    | { type: 'setDeletedArticles'; payload: Article[] }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setError'; payload: string }
    | { type: 'setNotificationPreferences'; payload: NotificationPreferences }
