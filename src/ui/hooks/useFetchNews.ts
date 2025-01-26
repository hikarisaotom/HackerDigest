import { useContext, useCallback } from 'react';
import getNewsUseCase from '../../domain/useCases/news/getNewsUseCase';
import { AppContext } from '../../data/store/Context';

const useFetchNews = (onSuccess: () => void = ()=>{}, onError: () => void = ()=>{}) => {
  const { dispatch } = useContext(AppContext);

  const fetchNews = useCallback(async () => {
    dispatch({ type: 'setLoading', payload: true });
    try {
      const articles = await getNewsUseCase();
      dispatch({ type: 'setArticles', payload: articles ?? []});
      onSuccess();
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
      onError();
    } finally {
      dispatch({ type: 'setLoading', payload: false });
    }
  }, [onSuccess, onError, dispatch]);

  return { fetchNews };
};

export default useFetchNews;
