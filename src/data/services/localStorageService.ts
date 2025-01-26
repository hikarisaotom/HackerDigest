import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseResponse, Hit } from '../../domain/interfaces/news';

const API_CACHE_KEY = 'last_api_response';
const FAVORITES_KEY = 'favorites_list';
const DELETED_KEY = 'deleted_list';
const NOTIFICATION_PREFERENCES = 'notification_preferences';

const localStorageService = {
    // Save the API response
    saveData: async (data: BaseResponse) => {
        try {
            await AsyncStorage.setItem(API_CACHE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('[!@#] Save Data Error:', error);
        }
    },

    // Read the API response
    readData: async (): Promise<BaseResponse | null> => {
        try {
            const cachedData = await AsyncStorage.getItem(API_CACHE_KEY);
            if (cachedData) {
                return JSON.parse(cachedData) as BaseResponse;
            }
            return null;
        } catch (error) {
            console.error('[!@#] Read Data Error:', error);
            return null;
        }
    },

    // Save favorites list
    saveFavorites: async (favorites: Hit[]) => {
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    },

    // Read favorites list
    readFavorites: async (): Promise<Hit[]> => {
        try {
            const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
            return favorites ? JSON.parse(favorites) : [];
        } catch (error) {
            console.error('[!@#] Read Favorites Error:', error);
            return [];
        }
    },

    // Save deleted list
    saveDeleted: async (deleted: Hit[]) => {
        try {
            await AsyncStorage.setItem(DELETED_KEY, JSON.stringify(deleted));
        } catch (error) {
            console.error('[!@#] Save Deleted Error:', error);
        }
    },

    // Read deleted list
    readDeleted: async (): Promise<Hit[]> => {
        try {
            const deleted = await AsyncStorage.getItem(DELETED_KEY);
            return deleted ? JSON.parse(deleted) : [];
        } catch (error) {
            console.error('[!@#] Read Deleted Error:', error);
            return [];
        }
    },

    // Save notification preferences
    saveNotificationPreferences: async (preferences: NotificationPreferences) => {
        try {
            await AsyncStorage.setItem(NOTIFICATION_PREFERENCES, JSON.stringify(preferences));
        } catch (error) {
            console.error('[!@#] Save Notification Preferences Error:', error);
        }
    },

    // Read notification preferences
    readNotificationPreferences: async (): Promise<NotificationPreferences> => {
        let defaultResponse:NotificationPreferences = {sendNotifications: true, timeInterval: 1, articleType: ''};
        try {
            const preferences = await AsyncStorage.getItem(NOTIFICATION_PREFERENCES);
            return preferences ? JSON.parse(preferences) : defaultResponse;
        } catch (error) {
            console.error('[!@#] Read Notification Preferences Error:', error);
            return defaultResponse;
        }
    },
};

export default localStorageService;
