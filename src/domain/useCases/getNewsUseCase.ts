import apiService from '../../data/services/apiService';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getNewsUseCase = async (onSuccess: ()=> void, onError: ()=> void) => {
    try {
      const data = await apiService.getData(onSuccess, onError);
      const formatedHits = data?.hits.map((item: any) => ({
        ...item,
        //format date to a more readable format
        created_at: formatDate(item.created_at),
      }));
      const newData = { ...data, hits: formatedHits };
      return newData;
    } catch (error) {
      throw error;
    }
  };
  export default getNewsUseCase;
