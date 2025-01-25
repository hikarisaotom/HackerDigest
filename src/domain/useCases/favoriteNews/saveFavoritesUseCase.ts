import localStorageService from '../../../data/services/localStorageService';
import { Hit } from '../../interfaces/news';

const saveFavoritesUseCase = async (newData: Hit[]) => {
    try {
      let data = await localStorageService.saveFavorites(newData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default saveFavoritesUseCase;
