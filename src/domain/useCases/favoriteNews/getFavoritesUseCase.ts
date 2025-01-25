import localStorageService from '../../../data/services/localStorageService';

const getFavoritesUseCase = async () => {
    try {
      let data = await localStorageService.readFavorites();
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default getFavoritesUseCase;
