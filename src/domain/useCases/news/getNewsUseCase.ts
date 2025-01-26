import apiService from '../../../data/services/apiService';
import localStorageService from '../../../data/services/localStorageService';
import { Article } from '../../interfaces/article';
import saveNewsUseCase from './saveNewsUseCase';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getNewsUseCase = async () => {
  try {
    const hits = await apiService.getData();
    if (hits) {
      let Unknown = 'Unknown';
      const articles: Article[] = hits?.map((item: any) => ({
        id: item.story_id ?? item.objectID ,
        title: item.title ?? item.story_title ?? item.comment_text ?? Unknown,
        content: item.content,
        author: item.author ?? Unknown,
        url: item.url ?? item.story_url ?? '',
        date: item.created_at ? formatDate(item.created_at) : Unknown,
      }));
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
