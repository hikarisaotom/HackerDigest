import localStorageService from '../../../data/services/localStorageService';

const getDeletedUseCase = async () => {
    try {
      let data = await localStorageService.readDeleted();
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default getDeletedUseCase;
