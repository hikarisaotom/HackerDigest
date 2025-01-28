import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationPreferences } from '../../domain/interfaces/notifications';
import Config from 'react-native-config';
import { Article } from '../../domain/interfaces/article';

const API_CACHE_KEY = 'last_api_response';
const FAVORITES_KEY = 'favorites_list';
const DELETED_KEY = 'deleted_list';
const NOTIFICATION_PREFERENCES = 'notification_preferences';

const localStorageService = {
    // Save the API response
    saveArticles: async (data: Article[]) => {
        try {
            await AsyncStorage.setItem(API_CACHE_KEY, JSON.stringify(data));
        } catch (error) {
        }
    },

    // Read the API response
    readArticles: async (): Promise<Article[] | []> => {
        try {
            const articles = await AsyncStorage.getItem(API_CACHE_KEY);
            return articles ? JSON.parse(articles) as Article[] : [];
        } catch (error) {
            return [];
        }
    },

    // Save favorites list
    saveFavorites: async (favorites: Article[]) => {
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    },

    // Read favorites list
    readFavorites: async (): Promise<Article[]> => {
        try {
            const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
            return favorites ? JSON.parse(favorites) as Article[] : [];
        } catch (error) {
            return [];
        }
    },

    // Save deleted list
    saveDeleted: async (deleted: Article[]) => {
        try {
            await AsyncStorage.setItem(DELETED_KEY, JSON.stringify(deleted));
        } catch (error) {
        }
    },

    // Read deleted list
    readDeleted: async (): Promise<Article[]> => {
        try {
            const deleted = await AsyncStorage.getItem(DELETED_KEY);
            return deleted ? JSON.parse(deleted) as Article[] : [];
        } catch (error) {
            return [];
        }
    },

    // Save notification preferences
    saveNotificationPreferences: async (preferences: NotificationPreferences) => {
        try {
            await AsyncStorage.setItem(NOTIFICATION_PREFERENCES, JSON.stringify(preferences));
        } catch (error) {
        }
    },

    // Read notification preferences
    readNotificationPreferences: async (): Promise<NotificationPreferences> => {
        let defaultResponse: NotificationPreferences = { sendNotifications: true, timeInterval: Config.DEFAULT_TIME_INTERVAL ?? 180000, articleType: 'mobile' };
        try {
            const preferences = await AsyncStorage.getItem(NOTIFICATION_PREFERENCES);
            return preferences ? JSON.parse(preferences) : defaultResponse;
        } catch (error) {
            return defaultResponse;
        }
    },
};

export default localStorageService;
