import apiService from '../../data/services/apiService';

const getNewsUseCase = async (onSuccess: ()=> void, onError: ()=> void) => {
    try {
      const data = await apiService.getData(onSuccess, onError);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export default getNewsUseCase;
