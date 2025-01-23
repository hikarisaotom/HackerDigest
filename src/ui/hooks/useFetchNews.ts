import { useState, useCallback } from 'react';
import getNewsUseCase from '../../domain/useCases/getNewsUseCase';
import { Hit } from '../../domain/interfaces/news';

const useFetchNews = (onSuccess: () => void, onError: () => void) => {
  const [data, setData] = useState<Hit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchNews = useCallback(async () => {
    //Reseting states
    setLoading(true);
    setError(null);
    try {
      const result = await getNewsUseCase(onSuccess, onError);
      setData(result.hits ?? []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [onSuccess, onError]);

  return { data, loading, error, fetchNews };
};

export default useFetchNews;
