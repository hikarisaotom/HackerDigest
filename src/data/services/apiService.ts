import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseResponse } from '../../domain/interfaces/news';

const API_CACHE_KEY = 'last_api_response'; // Cache key for AsyncStorage

const apiService = {
  getData: async (onSuccess: () => void, onFailure: () => void): Promise<BaseResponse | null> => {
    try {
      console.log('[!@#] Config.API_URL',Config.API_URL);
      const response = await axios.get(Config.API_URL ?? '');
      // Save response to AsyncStorage
      await AsyncStorage.setItem(API_CACHE_KEY, JSON.stringify(response.data));
      console.log('[!@#] saved in cache');
      if (onSuccess) {
        onSuccess();
      }
      return response.data as BaseResponse;
    } catch (error) {
      // If there's no internet connection, load from AsyncStorage
      const cachedData = await AsyncStorage.getItem(API_CACHE_KEY);
      if (cachedData) {
      
        console.log('[!@#] Loaded from cache');
        if (onFailure) {
          onFailure();
        }
        return JSON.parse(cachedData) as BaseResponse;
      }

      if (onFailure) {
        onFailure();
      }
      console.log('[!@#]error', error);
      throw error;
    }
  },
};

export default apiService;
