import axios from 'axios';
import Config from 'react-native-config'
import { BaseResponse } from '../../domain/interfaces/news';
import localStorageService from './localStorageService';


const apiService = {
  getData: async (onSuccess: () => void, onFailure: () => void): Promise<BaseResponse | null> => {
    try {
      const response = await axios.get(Config.API_URL ?? '');
      // Save response to AsyncStorage
      await localStorageService.saveData(response.data);
      if (onSuccess) {
        onSuccess();
      }
      return response.data as BaseResponse;
    } catch (error) {
      // If there's no internet connection, load from AsyncStorage
      const cachedData = await localStorageService.readData();
      if (cachedData) {
        console.log('[!@#] Loaded from cache');
        if (onFailure) {
          onFailure();
        }
        return cachedData;
      }else{
        if (onFailure) {
          onFailure();
        }
        console.log('[!@#]error', error);
        throw error;
      }
    }
  },
};

export default apiService;
