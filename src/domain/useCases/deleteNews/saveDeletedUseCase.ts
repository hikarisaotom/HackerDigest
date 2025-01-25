import localStorageService from '../../../data/services/localStorageService';
import { Hit } from '../../interfaces/news';

const saveDeletedUseCase = async (newData: Hit[]) => {
    try {
      let data = await localStorageService.saveDeleted(newData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default saveDeletedUseCase;
