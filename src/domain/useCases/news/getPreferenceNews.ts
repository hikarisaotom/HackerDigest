import apiService from '../../../data/services/apiService';
import { mapToArticle } from '../../utils';

const getPreferenceNews = async (query:string) => {
    try {
      const data = await apiService.getPreferenceData(query);
      return mapToArticle(data);
    } catch (error) {
      return [];
    }
  };
  export default getPreferenceNews;
