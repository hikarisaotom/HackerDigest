import apiService from '../../../data/services/apiService';

const getPreferenceNews = async (query:string) => {
    try {
      const data = await apiService.getPreferenceData(query);
      return data?.hits ?? [];
    } catch (error) {
      return [];
    }
  };
  export default getPreferenceNews;
