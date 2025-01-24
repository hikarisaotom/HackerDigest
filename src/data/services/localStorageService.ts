import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseResponse } from '../../domain/interfaces/news';

const API_CACHE_KEY = 'last_api_response';

const localStorageService = {
    saveData: async (data: BaseResponse) => {
        try {
            await AsyncStorage.setItem(API_CACHE_KEY, JSON.stringify(data));
        } catch (error) {
            console.log('[!@#]error', error);
        }
    },
    readData: async (): Promise<BaseResponse | null> => {
        try {
            const cachedData = await AsyncStorage.getItem(API_CACHE_KEY);
            if (cachedData) {
                return JSON.parse(cachedData) as BaseResponse;
            }
            return null;
        } catch (error) {
            console.log('[!@#]error', error);
            return null;
        }
    },
};

export default localStorageService;
