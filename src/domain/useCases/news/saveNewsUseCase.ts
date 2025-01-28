import localStorageService from '../../../data/services/localStorageService';
import { Article } from '../../interfaces/article';

const saveNewsUseCase = async (newData: Article[]) => {
    try {
      let data = await localStorageService.saveArticles(newData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default saveNewsUseCase;
