import axios from 'axios';
import Config from 'react-native-config'
import { BaseResponse } from '../../domain/interfaces/news';
import localStorageService from './localStorageService';


const apiService = {
  getData: async (onSuccess: () => void, onFailure: () => void): Promise<BaseResponse | null> => {
    try {
      let url = Config.API_URL?.replace('$SEARCH_TERM$',Config.DEFAULT_SEARCH_TERM) ?? '';
      console.log('[!@#] BASE URL:', url);
      const response = await axios.get(url);
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
  getPreferenceData: async (query:string): Promise<BaseResponse | null> => {
    try {
      let searchTerm = query ? query :  Config.DEFAULT_SEARCH_TERM ?? 'mobile';
      let url = Config.API_URL?.replace('$SEARCH_TERM$',searchTerm) ?? '';
      console.log('[!@#] PREFERENCE URL:', url);
      const response = await axios.get(url);
      return response.data as BaseResponse ?? {};
    } catch (error) {
      return null;
    }
  },
};

export default apiService;
