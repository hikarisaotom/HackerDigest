import localStorageService from '../../../data/services/localStorageService';
import { Hit } from '../../interfaces/news';

const saveFavoritesUseCase = async (newData: Hit[], onSuccess: () => void, onError: () => void) => {
    try {
      let data = await localStorageService.saveFavorites(newData);
      onSuccess();
      return data;
    } catch (error) {
      onError();
      throw error;
    }
  };
  export default saveFavoritesUseCase;
