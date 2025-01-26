import apiService from '../../../data/services/apiService';
import localStorageService from '../../../data/services/localStorageService';
import { Article } from '../../interfaces/article';
import { mapToArticle } from '../../utils';
import saveNewsUseCase from './saveNewsUseCase';



const getNewsUseCase = async () => {
  try {
    const hits = await apiService.getData();
    if (hits) {
      const articles: Article[] = mapToArticle(hits);
      // save the new articles to local storage for offline use
      saveNewsUseCase(articles);
      return articles;
    } else {
       // if hits is null, probably because of an error, try to get the saved data
      let savedData = await localStorageService.readArticles();
      return savedData;
    }
  } catch (error) {
    throw error;
  }
};
export default getNewsUseCase;
