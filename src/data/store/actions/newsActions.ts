import { Hit } from '../../../domain/interfaces/news';
import { NotificationPreferences } from '../../../domain/interfaces/notifications';

export type newsAction =
    | { type: 'setArticles'; payload: Hit[] }
    | { type: 'addToFavorites'; payload: Hit }
    | { type: 'removeFromFavorites'; payload: Hit }
    | { type: 'setFavorites'; payload: Hit[] }
    | { type: 'deleteArticle'; payload: Hit }
    | { type: 'setDeletedArticles'; payload: Hit[] }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setError'; payload: string }
    | { type: 'setNotificationPreferences'; payload: NotificationPreferences }
