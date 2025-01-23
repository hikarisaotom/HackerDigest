import axios from 'axios';
import Config from 'react-native-config';
const apiService = {
    getData: async (onSuccess: () => void, onFailure: () => void) => {
      try {
        const response = await axios.get(Config.API_URL ?? '');
        if (onSuccess) {
          onSuccess();
        }
        return response.data;
      } catch (error) {
        if (onFailure) {
          onFailure();
        }
        throw error;
      }
    },
  };
  export default apiService;
