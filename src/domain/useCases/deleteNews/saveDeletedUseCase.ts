import localStorageService from '../../../data/services/localStorageService';
import { Article } from '../../interfaces/article';

const saveDeletedUseCase = async (newData: Article[]) => {
    try {
      let data = await localStorageService.saveDeleted(newData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default saveDeletedUseCase;
