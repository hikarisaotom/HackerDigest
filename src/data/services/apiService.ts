import axios from 'axios';
import Config from 'react-native-config'
import { BaseResponse, Hit } from '../types/news';

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data as BaseResponse;
  } catch (error) {
    throw error;
  }
};

const apiService = {
  getData: async (): Promise<Hit[] | null> => {
    try {
      let url = Config.API_URL?.replace('$SEARCH_TERM$',Config.DEFAULT_SEARCH_TERM) ?? '';
      const response = await fetchData(url);
      return response.hits ?? null;
    } catch (error) {
       return null;
      }
    },
  getPreferenceData: async (searchTerm:string): Promise<Hit[] | null> => {
    try {
      let search_term = searchTerm ? searchTerm :  Config.DEFAULT_SEARCH_TERM ?? 'mobile';
      let url = Config.API_URL?.replace('$SEARCH_TERM$',search_term) ?? '';
      console.log('[!@#] Preference:', url);
      const response = await fetchData(url);
      return response.hits ?? null;
    } catch (error) {
        return null;
      }
    },
};

export default apiService;
