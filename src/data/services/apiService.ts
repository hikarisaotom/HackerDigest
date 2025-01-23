import axios from 'axios';
import Config from 'react-native-config';
import { BaseResponse } from '../../domain/interfaces/news';

const apiService = {
    getData: async (onSuccess: () => void, onFailure: () => void) => {
      try {
        const response = await axios.get(Config.API_URL ?? '');
        if (onSuccess) {
          onSuccess();
        }
        return response.data as BaseResponse;
      } catch (error) {
        if (onFailure) {
          onFailure();
        }
        throw error;
      }
    },
  };
  export default apiService;
