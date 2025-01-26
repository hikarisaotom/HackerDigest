import { useContext, useCallback } from 'react';
import getNewsUseCase from '../../domain/useCases/getNewsUseCase';
import { AppContext } from '../../data/store/Context';

const useFetchNews = (onSuccess: () => void = ()=>{}, onError: () => void = ()=>{}) => {
  const { dispatch } = useContext(AppContext);

  const fetchNews = useCallback(async () => {
    dispatch({ type: 'setLoading', payload: true });
    try {
      const result = await getNewsUseCase(onSuccess, onError);
      dispatch({ type: 'setArticles', payload: result.hits ?? []});
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
    } finally {
      dispatch({ type: 'setLoading', payload: false });
    }
  }, [onSuccess, onError, dispatch]);

  return { fetchNews };
};

export default useFetchNews;
