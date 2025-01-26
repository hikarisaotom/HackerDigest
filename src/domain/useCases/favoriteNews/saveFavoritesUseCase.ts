import localStorageService from '../../../data/services/localStorageService';
import { Article } from '../../interfaces/article';

const saveFavoritesUseCase = async (newData: Article[]) => {
    try {
      let data = await localStorageService.saveFavorites(newData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default saveFavoritesUseCase;
